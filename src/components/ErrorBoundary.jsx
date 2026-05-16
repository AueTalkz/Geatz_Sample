import { Component } from 'react';
import { motion } from 'framer-motion';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
          zIndex: 10,
        }}>
          <motion.div
            className="glass-card white-glow"
            style={{ textAlign: 'center', maxWidth: '500px', padding: '60px 40px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚡</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Something went wrong
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.6 }}>
              {this.props.fallbackMessage || "We hit a glitch. Don't worry — just click below to get back on track."}
            </p>
            <button
              className="btn btn-primary"
              onClick={this.handleReset}
            >
              Return Home
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
