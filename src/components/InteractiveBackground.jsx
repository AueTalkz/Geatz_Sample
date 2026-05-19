import { useEffect, useRef } from 'react';

const COLORS = [
  '#06b6d4', // Brand Cyan
  '#2563eb', // Brand Blue
  '#db2777', // Brand Pink
  '#9333ea', // Brand Purple
  '#38bdf8', // Light Blue
  '#c084fc', // Light Purple
];

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, tx: -1000, ty: -1000, active: false });
  const scrollRef = useRef({ lastY: window.scrollY, deltaY: 0 });

   
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let burstParticles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Accessibility check: respects user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Adjust particle density based on screen size
    const getParticleCount = (w, h) => {
      if (prefersReducedMotion) return 15;
      const baseArea = 1920 * 1080;
      const currentArea = w * h;
      const densityMultiplier = Math.min(1.2, Math.max(0.4, currentArea / baseArea));
      
      if (w < 768) return Math.floor(35 * densityMultiplier); // Mobile
      if (w < 1024) return Math.floor(70 * densityMultiplier); // Tablet
      return Math.floor(125 * densityMultiplier); // Desktop
    };

    class Particle {
      constructor(isNew = false, x, y) {
        this.x = x !== undefined ? x : Math.random() * width;
        this.y = y !== undefined ? y : Math.random() * height;
        this.size = Math.random() * 1.5 + 0.8; // Small crisp dots
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.baseAlpha = Math.random() * 0.4 + 0.2;
        this.alpha = this.baseAlpha;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
        this.repelForceX = 0;
        this.repelForceY = 0;
        
        // Spawn fade-in effect
        if (isNew) {
          this.alpha = 0;
          this.targetAlpha = this.baseAlpha;
        } else {
          this.targetAlpha = this.baseAlpha;
        }
      }

      update(mouseX, mouseY, mouseActive, scrollDelta) {
        // Slowly update angles for organic steering
        if (!prefersReducedMotion) {
          this.angle += this.angleSpeed;
          this.x += Math.cos(this.angle) * 0.15 + this.speedX;
          this.y += Math.sin(this.angle) * 0.15 + this.speedY;
        } else {
          this.x += this.speedX * 0.2;
          this.y += this.speedY * 0.2;
        }

        // Apply scroll drift (parallax vertical motion)
        this.y += scrollDelta * 0.15;

        // Mouse interaction (Repulsion)
        if (mouseActive && !prefersReducedMotion) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist; // 0 to 1
            const strength = 4.5;
            
            // Push away
            this.repelForceX = (dx / dist) * force * strength;
            this.repelForceY = (dy / dist) * force * strength;
          } else {
            // Decay repulsion
            this.repelForceX *= 0.92;
            this.repelForceY *= 0.92;
          }
        } else {
          this.repelForceX *= 0.92;
          this.repelForceY *= 0.92;
        }

        this.x += this.repelForceX;
        this.y += this.repelForceY;

        // Slowly fade in new particles
        if (this.alpha < this.targetAlpha) {
          this.alpha += 0.01;
        }

        // Wrap edges smoothly
        const padding = 10;
        if (this.x < -padding) this.x = width + padding;
        else if (this.x > width + padding) this.x = -padding;
        
        if (this.y < -padding) this.y = height + padding;
        else if (this.y > height + padding) this.y = -padding;
      }

      draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = this.alpha;
        c.shadowColor = this.color;
        c.shadowBlur = 6;
        c.fill();
      }
    }

    class BurstParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1.0;
        this.decay = Math.random() * 0.02 + 0.015;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96; // drag
        this.vy *= 0.96;
        this.alpha -= this.decay;
      }

      draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = Math.max(0, this.alpha);
        c.shadowColor = this.color;
        c.shadowBlur = 8;
        c.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const count = getParticleCount(width, height);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(false));
      }
    };

    initParticles();

    // Smoothly interpolate mouse position (lerping)
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const animate = () => {
      // Clear canvas with a very subtle dark trail for smooth motion
      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      
      // Draw dark radial gradient space background directly
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) * 0.8);
      bgGrad.addColorStop(0, '#0c0c20'); // deep purple blue tint in center
      bgGrad.addColorStop(1, '#04040a'); // absolute dark near edges
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Lerp mouse coordinates
      const mouse = mouseRef.current;
      if (mouse.active) {
        mouse.x = lerp(mouse.x, mouse.tx, 0.08);
        mouse.y = lerp(mouse.y, mouse.ty, 0.08);
      }

      // Draw subtle mouse ambient aura
      if (mouse.active && !prefersReducedMotion) {
        ctx.globalCompositeOperation = 'screen';
        ctx.shadowBlur = 0;
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        mouseGrad.addColorStop(0, 'rgba(6, 182, 212, 0.06)'); // brand cyan tint
        mouseGrad.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)'); // brand purple tint
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      }

      // Calculate scroll delta and decay it
      const scroll = scrollRef.current;
      scroll.deltaY = window.scrollY - scroll.lastY;
      scroll.lastY = window.scrollY;

      // Update and draw base particles
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y, mouse.active, scroll.deltaY);
        p.draw(ctx);
      });

      // Update and draw burst particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.update();
        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
        } else {
          bp.draw(ctx);
        }
      }

      // Draw lines between nearby particles (Constellation Effect)
      ctx.shadowBlur = 0;
      const maxDistance = width < 768 ? 75 : 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            
            // Create a gradient line between particle colors
            ctx.strokeStyle = pi.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Reset scroll delta
      scroll.deltaY *= 0.9;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event Handlers
    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.active = true;
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      
      // Initialize starting position on first enter
      if (mouse.x === -1000) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleClick = (e) => {
      if (prefersReducedMotion) return;
      const x = e.clientX;
      const y = e.clientY;
      const burstCount = width < 768 ? 8 : 15;
      
      for (let i = 0; i < burstCount; i++) {
        burstParticles.push(new BurstParticle(x, y));
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
