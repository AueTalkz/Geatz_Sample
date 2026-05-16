import { Helmet } from 'react-helmet-async';

export default function Seo({ 
  title = 'Geatz Groupz — Premium Development & Media', 
  description = 'Empowering brands through high-performance development and cinematic media creation. Geatz Groupz combines GDz (development) and GEz (entertainment) under one roof.',
  keywords = 'web development, media production, UI/UX design, content creation, Geatz Groupz, GDz, GEz',
  image = '/favicon.png',
  url = '',
  type = 'website'
}) {
  const siteUrl = 'https://geatzgroupz.vercel.app';
  const fullUrl = `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Geatz Groupz",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.png`,
    "description": description,
    "sameAs": [
      "https://www.linkedin.com/company/geatz-groupz/",
      "https://www.instagram.com/geatz_groupz/"
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "Geatz Developerz (GDz)",
        "description": "Premium web development, UI/UX design, and full-stack engineering."
      },
      {
        "@type": "Organization",
        "name": "Geatz Entertainmentz (GEz)",
        "description": "Content creation, media production, and cinematic storytelling."
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Geatz Groupz" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={fullUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
