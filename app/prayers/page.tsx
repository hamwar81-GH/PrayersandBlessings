import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Prayers 2026 | Morning, Healing, Gratitude & More | Prayers and Blessings',
  description: 'Browse our complete collection of prayers for every occasion — morning prayers, healing prayers, protection prayers, gratitude prayers and more. Over 500 curated prayers.',
  alternates: { canonical: 'https://prayersandblessings.net/prayers' },
  openGraph: { title: 'Prayers Collection | Prayers and Blessings', description: 'Browse 500+ curated prayers for every season of life.', url: 'https://prayersandblessings.net/prayers' },
};

const prayerCategories = [
  { title: 'Morning Prayers', desc: 'Greet each day with gratitude, purpose and divine connection. Start your morning rooted in faith.', href: '/prayers/morning-prayers', icon: '🌅', count: '45 Prayers' },
  { title: 'Healing Prayers', desc: 'Find comfort, restoration and peace during illness, grief, or pain. These prayers bring divine healing.', href: '/prayers/healing-prayers', icon: '💚', count: '38 Prayers' },
  { title: 'Gratitude Prayers', desc: 'Cultivate a thankful heart. Prayers of gratitude that shift your perspective and invite abundance.', href: '/prayers/gratitude-prayers', icon: '🙏', count: '30 Prayers' },
  { title: 'Protection Prayers', desc: 'Prayers that create a divine shield around you and your loved ones from harm and negativity.', href: '/prayers/protection-prayers', icon: '🛡️', count: '28 Prayers' },
  { title: 'Success Prayers', desc: 'Invite divine favor, guidance, and wisdom into your work, goals, and dreams.', href: '/prayers/success-prayers', icon: '⭐', count: '25 Prayers' },
  { title: 'Prayers for Anxiety', desc: 'Find peace and calm in moments of worry and anxiety. Let these prayers settle your spirit.', href: '/prayers/prayers-for-anxiety', icon: '🕊️', count: '32 Prayers' },
  { title: 'Evening Prayers', desc: 'Close your day with reflection, gratitude, and peaceful rest. Evening prayers for restful nights.', href: '/prayers/evening-prayers', icon: '🌙', count: '22 Prayers' },
  { title: 'Prayers for Strength', desc: 'When you feel weak or overwhelmed, these prayers invite divine strength into your situation.', href: '/prayers/prayers-for-strength', icon: '💪', count: '20 Prayers' },
  { title: 'Prayers for the Grieving', desc: 'Gentle prayers offering comfort, peace, and hope to those walking through grief and loss.', href: '/prayers/prayers-for-grieving', icon: '🤍', count: '18 Prayers' },
];

export default function PrayersPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #EEF4FF 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Prayers</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Prayers and Blessings Collection
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', maxWidth: '580px', lineHeight: 1.75 }}>
            Explore over 500 curated prayers for every season of life — from morning devotionals to healing prayers, protection prayers, and more. Each prayer is written with love and spiritual care.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <AdSlot id="ad-prayers-top" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {prayerCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
              <article className="hover-lift-sm" style={{
                background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)',
                borderRadius: '20px', padding: '1.75rem', transition: 'all 0.3s ease',
              }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{cat.icon}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{cat.count}</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem' }}>{cat.title}</h2>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: '#6B6B6B', lineHeight: 1.65 }}>{cat.desc}</p>
                <div style={{ marginTop: '1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#C9A96E' }}>Read Prayers →</div>
              </article>
            </Link>
          ))}
        </div>

        <AdSlot id="ad-prayers-bottom" />
      </div>
    </div>
  );
}
