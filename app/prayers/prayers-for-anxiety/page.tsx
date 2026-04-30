import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Prayers For Anxiety 2026 | Prayers and Blessings',
  description: 'Heartfelt Prayers For Anxiety for comfort, peace, and spiritual strength. Curated prayers and blessings for every heart seeking healing.',
  alternates: { canonical: 'https://prayersandblessings.net/prayers/prayers-for-anxiety' },
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #F5F0FF 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/prayers" style={{ color: '#C9A96E', textDecoration: 'none' }}>Prayers</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Prayers For Anxiety</span>
          </nav>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Prayers For Anxiety: Prayers and Blessings for the Soul
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            A curated collection of Prayers For Anxiety for comfort, spiritual guidance, and divine peace.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-prayers-for-anxiety-top" />
        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            These prayers and blessings are among our most beloved. Whether seeking comfort or deepening your spiritual practice, each prayer opens a door to divine connection and restoration.
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            A Prayer for Prayers For Anxiety
          </h2>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', padding: '1.5rem', background: 'rgba(201,169,110,0.04)', borderRadius: '0 12px 12px 0', margin: '0 0 2rem' }}>
            Lord, I bring to You every burden, every fear, and every silent prayer of my heart. Fill me with Your peace, strengthen my spirit, and remind me that in Your love, I am never alone. Amen.
          </blockquote>
          <AdSlot id="ad-prayers-for-anxiety-mid" />
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            We invite you to make these prayers and blessings part of your daily spiritual practice. Return often, share with those who need encouragement, and allow the sacred words to bring lasting peace to your heart.
          </p>
        </div>
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>Explore More</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[{label:'Morning Prayers',href:'/prayers/morning-prayers'},{label:'Family Blessings',href:'/blessings/family-blessings'},{label:'Collections',href:'/collections'},{label:'All Prayers',href:'/prayers'}].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <AdSlot id="ad-prayers-for-anxiety-bottom" />
      </div>
    </div>
  );
}
