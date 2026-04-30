import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Prayer Collections 2026 | Curated Devotional Bundles | Prayers and Blessings',
  description: 'Browse our curated prayer collections and blessing bundles. Comprehensive devotional series for morning, healing, family, and difficult times.',
  alternates: { canonical: 'https://prayersandblessings.net/collections' },
};

const collections = [
  { title: '21 Powerful Morning Prayers', count: '21 Prayers', desc: 'A complete morning devotional series to start every day with purpose, peace, and divine connection. Includes prayers for gratitude, guidance, and strength.', href: '/collections/21-morning-prayers', tag: 'Popular', icon: '🌅' },
  { title: 'Bedtime Blessings Collection', count: '15 Blessings', desc: 'Close each day in peace with these gentle bedtime blessings. Perfect for families, children, and anyone seeking restful sleep.', href: '/collections/bedtime-blessings', tag: 'Beloved', icon: '🌙' },
  { title: 'Prayers for Difficult Times', count: '18 Prayers', desc: 'A compassionate collection offering strength, hope, and comfort when life feels overwhelming, uncertain, or painful.', href: '/collections/prayers-difficult-times', tag: 'Healing', icon: '🕊️' },
  { title: 'Family Blessing Bundle', count: '12 Blessings', desc: 'Everything your family needs — blessings for parents, children, marriages, and family unity through every season.', href: '/collections/family-blessing-bundle', tag: 'New', icon: '🏡' },
];

export default function CollectionsPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #EFF6EE 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Collections</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Curated Prayer &amp; Blessing Collections
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', maxWidth: '580px', lineHeight: 1.75 }}>
            Our collections are thoughtfully curated series of prayers and blessings organized around specific themes, seasons, and spiritual needs. Each collection offers a complete devotional journey.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <AdSlot id="ad-collections-top" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {collections.map((col) => (
            <Link key={col.href} href={col.href} style={{ textDecoration: 'none' }}>
              <article style={{ background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '24px', padding: '2rem', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(31,31,31,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(201,169,110,0.12)', color: '#C9A96E', borderRadius: '999px', padding: '0.2rem 0.85rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>{col.tag}</div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{col.icon}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>{col.count}</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem', lineHeight: 1.25 }}>{col.title}</h2>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{col.desc}</p>
                <div style={{ marginTop: '1.5rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#C9A96E' }}>Explore Collection →</div>
              </article>
            </Link>
          ))}
        </div>
        <AdSlot id="ad-collections-bottom" />
      </div>
    </div>
  );
}
