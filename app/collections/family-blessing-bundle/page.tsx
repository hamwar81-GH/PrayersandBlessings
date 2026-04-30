import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Family Blessing Bundle Collection 2026 | Prayers and Blessings',
  description: 'Explore our Family Blessing Bundle collection of heartfelt prayers and blessings curated for spiritual depth.',
  alternates: { canonical: 'https://prayersandblessings.net/collections/family-blessing-bundle' },
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #EFF6EE 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/collections" style={{ color: '#C9A96E', textDecoration: 'none' }}>Collections</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Family Blessing Bundle</span>
          </nav>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Family Blessing Bundle: A Complete Prayer and Blessing Collection
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            A thoughtfully curated collection of prayers and blessings for spiritual depth and daily devotion.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-family-blessing-bundle-top" />
        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            This prayers and blessings collection has been assembled with deep spiritual care. Each prayer serves a specific purpose — to lift your spirit, ground your faith, and connect you more deeply with the divine.
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            Opening Blessing
          </h2>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', padding: '1.5rem', background: 'rgba(201,169,110,0.04)', borderRadius: '0 12px 12px 0', margin: '0 0 2rem' }}>
            May these prayers and blessings find you exactly where you are, offer you exactly what you need, and carry you gently into deeper faith, peace, and love. Amen.
          </blockquote>
          <AdSlot id="ad-family-blessing-bundle-mid" />
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            Move through this collection slowly and intentionally. Let each prayer or blessing settle into your heart before moving forward. True spiritual depth is cultivated in stillness and presence.
          </p>
        </div>
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>More Collections</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[{label:'All Collections',href:'/collections'},{label:'Morning Prayers',href:'/prayers/morning-prayers'},{label:'Family Blessings',href:'/blessings/family-blessings'},{label:'Guides',href:'/guides'}].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <AdSlot id="ad-family-blessing-bundle-bottom" />
      </div>
    </div>
  );
}
