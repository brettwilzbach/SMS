import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "SMS - Soft Men Skills | Home Repair Workshop for Men | Milton, MA",
  description = "Six-week hands-on workshop series for men who want to stop outsourcing home repairs. Learn wall mounting, plumbing, electrical basics, and more in Milton, MA.",
  keywords = "home repair workshop, men's workshop, DIY skills, handyman training, Milton MA, home improvement classes",
  ogTitle = "SMS - Soft Men Skills | Home Repair Workshop for Men",
  ogDescription = "Break out your stud finder! Six weeks of hands-on learning for men ready to stop outsourcing the basics.",
  canonicalUrl = "https://softmenskills.com"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('twitter:title', ogTitle);
    updateMetaTag('twitter:description', ogDescription);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, ogTitle, ogDescription, canonicalUrl]);

  return null;
};

export default SEO;