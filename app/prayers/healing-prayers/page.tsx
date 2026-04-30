import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Healing Prayers 2026 | Powerful & Uplifting | Prayers and Blessings',
  description: 'Discover heartfelt Healing Prayers for comfort, peace, and spiritual strength. Curated prayers and blessings for every heart.',
  alternates: { canonical: 'https://prayersandblessings.net/prayers/healing-prayers' },
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
            <span>Healing Prayers</span>
          </nav>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Healing Prayers: Prayers and Blessings for the Soul
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            Discover our curated collection of Healing Prayers offering comfort, spiritual guidance, and divine peace. These prayers and blessings are written with care for every heart seeking connection and healing.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-healing-prayers-top" />
        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            Healing Prayers are among the most sought-after prayers in our collection. Whether you are seeking comfort during a difficult season or simply want to deepen your spiritual practice, these prayers and blessings offer a profound path to divine connection, peace, and restoration.
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            A Heartfelt Healing Prayers Prayer
          </h2>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', paddingLeft: '1.5rem', margin: '0 0 1.5rem', background: 'rgba(201,169,110,0.04)', padding: '1.5rem', borderRadius: '0 12px 12px 0' }}>
            Gracious Lord, I come before You seeking Your divine touch. Let Your presence fill every corner of my heart, bring light to every shadow, and peace to every storm within me. I trust in Your love, and I rest in Your grace. Amen.
          </blockquote>
          <AdSlot id="ad-healing-prayers-mid" />
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>
            The Power of Healing Prayers
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Throughout history, people of faith have turned to prayer as their most powerful resource. Healing Prayers remind us that we are never alone in our struggles — divine love surrounds us always. When spoken with sincerity and an open heart, these prayers create space for healing, clarity, and transformation.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            We invite you to return to these prayers and blessings daily. Bookmark this page, share it with someone who needs it, and allow the sacred words to settle into your heart over time.
          </p>
        </div>
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>Explore More Prayers &amp; Blessings</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { label: 'Morning Prayers', href: '/prayers/morning-prayers' },
              { label: 'Family Blessings', href: '/blessings/family-blessings' },
              { label: 'Collections', href: '/collections' },
              { label: 'All Prayers', href: '/prayers' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <AdSlot id="ad-healing-prayers-bottom" />
      </div>
    </div>
  );
}
