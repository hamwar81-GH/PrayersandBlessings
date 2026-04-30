import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Blessings 2026 | Family, Birthday, Wedding & Daily Blessings',
  description: 'Discover heartfelt blessings for every occasion — family blessings, birthday blessings, wedding blessings, bedtime blessings and more. Share divine favor with loved ones.',
  alternates: { canonical: 'https://prayersandblessings.net/blessings' },
};

const blessingCategories = [
  { title: 'Family Blessings', desc: 'Powerful blessings for unity, protection, and love within your family circle.', href: '/blessings/family-blessings', icon: '🏡', count: '35 Blessings' },
  { title: 'Birthday Blessings', desc: 'Celebrate milestones with heartfelt blessings of joy, health, and divine favor.', href: '/blessings/birthday-blessings', icon: '🎂', count: '28 Blessings' },
  { title: 'Bedtime Blessings', desc: 'Close each day in peace and gratitude with gentle evening blessings.', href: '/blessings/bedtime-blessings', icon: '🌙', count: '22 Blessings' },
  { title: 'Success Blessings', desc: 'Invite divine favor and prosperity into your work, goals, and aspirations.', href: '/blessings/success-blessings', icon: '✨', count: '20 Blessings' },
  { title: 'Wedding Blessings', desc: 'Blessings for couples beginning their journey together in love and faith.', href: '/blessings/wedding-blessings', icon: '💍', count: '18 Blessings' },
];

export default function BlessingsPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #F5EFE6 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Blessings</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Blessings for Every Occasion
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', maxWidth: '580px', lineHeight: 1.75 }}>
            Blessings are sacred declarations of goodness, favor, and divine love spoken over people, relationships, and new beginnings. Explore our collection of over 120 blessings for every season of life.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <AdSlot id="ad-blessings-top" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {blessingCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
              <article className="hover-lift-sm" style={{ background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '20px', padding: '1.75rem', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{cat.icon}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{cat.count}</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem' }}>{cat.title}</h2>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: '#6B6B6B', lineHeight: 1.65 }}>{cat.desc}</p>
                <div style={{ marginTop: '1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#C9A96E' }}>Read Blessings →</div>
              </article>
            </Link>
          ))}
        </div>
        <AdSlot id="ad-blessings-bottom" />
      </div>
    </div>
  );
}
