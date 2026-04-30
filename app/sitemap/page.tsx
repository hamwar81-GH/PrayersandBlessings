import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Prayers and Blessings — All Pages',
  description: 'A complete HTML sitemap of all prayers, blessings, collections, and guides on Prayers and Blessings.',
  alternates: { canonical: 'https://prayersandblessings.net/sitemap' },
};

const sitemapData = [
  {
    category: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Prayers', href: '/prayers' },
      { label: 'Blessings', href: '/blessings' },
      { label: 'Collections', href: '/collections' },
      { label: 'Guides', href: '/guides' },
    ],
  },
  {
    category: 'Prayers',
    links: [
      { label: 'Morning Prayers', href: '/prayers/morning-prayers' },
      { label: 'Healing Prayers', href: '/prayers/healing-prayers' },
      { label: 'Gratitude Prayers', href: '/prayers/gratitude-prayers' },
      { label: 'Protection Prayers', href: '/prayers/protection-prayers' },
      { label: 'Success Prayers', href: '/prayers/success-prayers' },
      { label: 'Prayers for Anxiety', href: '/prayers/prayers-for-anxiety' },
      { label: 'Evening Prayers', href: '/prayers/evening-prayers' },
      { label: 'Prayers for Strength', href: '/prayers/prayers-for-strength' },
      { label: 'Prayers for the Grieving', href: '/prayers/prayers-for-grieving' },
    ],
  },
  {
    category: 'Blessings',
    links: [
      { label: 'Family Blessings', href: '/blessings/family-blessings' },
      { label: 'Birthday Blessings', href: '/blessings/birthday-blessings' },
      { label: 'Bedtime Blessings', href: '/blessings/bedtime-blessings' },
      { label: 'Success Blessings', href: '/blessings/success-blessings' },
      { label: 'Wedding Blessings', href: '/blessings/wedding-blessings' },
    ],
  },
  {
    category: 'Collections',
    links: [
      { label: '21 Morning Prayers Collection', href: '/collections/21-morning-prayers' },
      { label: 'Bedtime Blessings Collection', href: '/collections/bedtime-blessings' },
      { label: 'Prayers for Difficult Times', href: '/collections/prayers-difficult-times' },
      { label: 'Family Blessing Bundle', href: '/collections/family-blessing-bundle' },
    ],
  },
  {
    category: 'Guides',
    links: [
      { label: 'How to Pray', href: '/guides/how-to-pray' },
      { label: 'Building a Prayer Routine', href: '/guides/building-prayer-routine' },
      { label: 'Prayer for Beginners', href: '/guides/prayer-for-beginners' },
      { label: 'Types of Prayer', href: '/guides/types-of-prayer' },
    ],
  },
  {
    category: 'Company & Legal',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Cookies Policy', href: '/cookies-policy' },
      { label: 'DMCA', href: '/dmca' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #DDE6D5 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Sitemap</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>HTML Sitemap</h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.75 }}>A complete directory of all pages on Prayers and Blessings.</p>
        </div>
      </section>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {sitemapData.map((section) => (
            <div key={section.category}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#C9A96E', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>{section.category}</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {section.links.map((link) => (
                  <li key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#C9A96E', fontSize: '0.7rem' }}>✦</span>
                    <Link href={link.href} className="hover-text-gold" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#3A3A3A', textDecoration: 'none', transition: 'color 0.2s' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
