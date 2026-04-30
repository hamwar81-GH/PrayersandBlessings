import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Spiritual Prayer Guides 2026 | How to Pray & Build a Devotional Practice',
  description: 'Comprehensive guides on prayer, blessings, and building a meaningful spiritual practice. Learn how to pray effectively, establish routines, and deepen your faith.',
  alternates: { canonical: 'https://prayersandblessings.net/guides' },
};

const guides = [
  { title: 'How to Pray: A Complete Beginner\'s Guide', desc: 'Everything you need to know to begin a meaningful prayer practice. Step-by-step guidance for those new to prayer.', href: '/guides/how-to-pray', icon: '🙏', readTime: '8 min read', tag: 'Beginner' },
  { title: 'Building a Daily Prayer Routine That Sticks', desc: 'Practical strategies for establishing a consistent morning and evening prayer practice that transforms your life.', href: '/guides/building-prayer-routine', icon: '📅', readTime: '6 min read', tag: 'Practice' },
  { title: 'Prayer for Beginners: Your First 30 Days', desc: 'A gentle 30-day introduction to prayer with daily prompts, blessings, and reflections to build your spiritual foundation.', href: '/guides/prayer-for-beginners', icon: '🌱', readTime: '10 min read', tag: 'Series' },
  { title: 'The Different Types of Prayer Explained', desc: 'Understanding petition, intercession, thanksgiving, praise, and contemplative prayer — and when to use each.', href: '/guides/types-of-prayer', icon: '📖', readTime: '7 min read', tag: 'Education' },
];

export default function GuidesPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Guides</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Spiritual Prayer &amp; Blessing Guides
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', maxWidth: '580px', lineHeight: 1.75 }}>
            Whether you are new to prayer or deepening an existing practice, our comprehensive guides offer practical wisdom, spiritual insight, and actionable steps for every stage of the journey.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <AdSlot id="ad-guides-top" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} style={{ textDecoration: 'none' }}>
              <article style={{ background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '20px', padding: '1.75rem', transition: 'all 0.3s ease', position: 'relative' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(31,31,31,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{guide.icon}</div>
                  <div style={{ background: 'rgba(201,169,110,0.1)', color: '#C9A96E', borderRadius: '999px', padding: '0.2rem 0.75rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em' }}>{guide.tag}</div>
                </div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem', lineHeight: 1.3 }}>{guide.title}</h2>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: '#6B6B6B', lineHeight: 1.65, marginBottom: '1rem' }}>{guide.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#9B9B9B' }}>{guide.readTime}</span>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#C9A96E' }}>Read Guide →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <AdSlot id="ad-guides-bottom" />
      </div>
    </div>
  );
}
