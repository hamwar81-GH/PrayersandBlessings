import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Bedtime Blessings 2026 | Prayers and Blessings',
  description: 'Beautiful Bedtime Blessings for every occasion. Curated prayers and blessings to share divine love and favor.',
  alternates: { canonical: 'https://prayersandblessings.net/blessings/bedtime-blessings' },
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #FFF5E6 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/blessings" style={{ color: '#C9A96E', textDecoration: 'none' }}>Blessings</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Bedtime Blessings</span>
          </nav>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Bedtime Blessings: Prayers and Blessings for the Heart
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            Curated Bedtime Blessings carrying the warmth of divine love for every occasion and season.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-bedtime-blessings-top" />
        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            Bedtime Blessings carry a sacred tradition of speaking divine goodness over people and occasions. These carefully curated prayers and blessings are written to honor that tradition with beauty, sincerity, and spiritual depth.
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            A Heartfelt Bedtime Blessings Blessing
          </h2>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', padding: '1.5rem', background: 'rgba(201,169,110,0.04)', borderRadius: '0 12px 12px 0', margin: '0 0 2rem' }}>
            May you be blessed abundantly — in joy, in peace, in love that endures. May the light of divine grace rest upon you today and always. Amen.
          </blockquote>
          <AdSlot id="ad-bedtime-blessings-mid" />
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            Return to these blessings often. Share them, speak them aloud, and allow the sacred words to bring lasting peace and joy to every heart they touch.
          </p>
        </div>
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>Explore More</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[{label:'All Blessings',href:'/blessings'},{label:'Morning Prayers',href:'/prayers/morning-prayers'},{label:'Collections',href:'/collections'},{label:'Guides',href:'/guides'}].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <AdSlot id="ad-bedtime-blessings-bottom" />
      </div>
    </div>
  );
}
