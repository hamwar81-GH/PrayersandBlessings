import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: '21 Powerful Morning Prayers for 2026 | Start Your Day with Faith',
  description: 'Discover 21 powerful morning prayers and blessings to start each day with gratitude, intention, and divine peace. Perfect for daily devotionals.',
  alternates: { canonical: 'https://prayersandblessings.net/prayers/morning-prayers' },
  openGraph: { title: '21 Powerful Morning Prayers | Prayers and Blessings', description: 'Start each day with gratitude, intention, and divine peace.', url: 'https://prayersandblessings.net/prayers/morning-prayers' },
};

const morningPrayers = [
  { title: 'A Prayer for a New Day', text: 'Heavenly Father, thank You for the gift of this new day. As I rise, fill my heart with gratitude and my mind with clarity. Guide my steps, strengthen my resolve, and let Your light shine through everything I do today. Amen.' },
  { title: 'Morning Prayer for Peace', text: 'Lord, as this morning unfolds, I ask for Your peace — the kind that surpasses understanding. Quiet the storms within me, calm my anxious thoughts, and let me walk through this day wrapped in Your serenity. Amen.' },
  { title: 'Prayer for Guidance and Direction', text: 'Divine Guide, I surrender this day to You. I do not know what lies ahead, but I trust that You do. Lead me in wisdom, show me the right paths, and help me to honor You in every decision. Amen.' },
  { title: 'A Prayer of Gratitude', text: 'Thank You, Lord, for the breath in my lungs, for the warmth of this morning, and for the love that surrounds me. Gratitude fills my heart today, and I choose to see Your goodness in every moment. Amen.' },
  { title: 'Morning Prayer for Strength', text: 'God of all strength, I come to You at the start of this day knowing I cannot walk it alone. Fill me with courage, endurance, and resilience. When challenges arise, remind me that Your strength is made perfect in my weakness. Amen.' },
];

export default function MorningPrayersPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #FFF5E6 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/prayers" style={{ color: '#C9A96E', textDecoration: 'none' }}>Prayers</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Morning Prayers</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(201,169,110,0.1)', borderRadius: '999px', padding: '0.25rem 0.85rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#C9A96E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>🌅 Morning Prayers</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem', lineHeight: 1.15 }}>
            21 Powerful Morning Prayers and Blessings to Start Your Day
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '680px' }}>
            Morning prayers and blessings are among the most transformative spiritual practices you can adopt. Beginning your day with intentional prayer sets a sacred tone, invites divine guidance, and fills your heart with gratitude before the demands of the day arrive. These 21 morning prayers have been carefully curated to speak to different needs — peace, strength, gratitude, direction, and hope.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-morning-top" />

        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            Whether you are new to morning prayer or deepening an existing practice, these prayers and blessings offer a gentle invitation to connect with the divine at the start of each day. Research in positive psychology consistently shows that morning gratitude and intention-setting correlates with higher well-being, greater focus, and more meaningful relationships throughout the day.
          </p>

          {morningPrayers.map((prayer, i) => (
            <article key={i} style={{ background: i % 2 === 0 ? '#FAF7F2' : 'rgba(201,169,110,0.04)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '20px', padding: '2rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>
                {i + 1}. {prayer.title}
              </h2>
              <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', paddingLeft: '1.5rem', margin: 0 }}>
                {prayer.text}
              </blockquote>
            </article>
          ))}

          {/* Mid-article ad */}
          <AdSlot id="ad-morning-mid" />

          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            How to Make Morning Prayer a Daily Practice
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Creating a consistent morning prayer routine begins with intentionality. Choose a specific time — ideally before checking your phone or engaging in work — and designate a quiet space for your prayers and blessings. Even 5–10 minutes of morning prayer can profoundly shift your mindset and spiritual connection throughout the day.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Consider pairing your morning prayers with a brief period of silence and reflection. After speaking your prayer aloud or in your heart, sit quietly for a moment and listen. Many spiritual traditions emphasize that prayer is a two-way conversation — speaking and listening.
          </p>

          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 500, color: '#1F1F1F', margin: '1.5rem 0 0.75rem' }}>
            The Benefits of Morning Prayers and Blessings
          </h3>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Regular morning prayers have been associated with reduced anxiety, greater emotional resilience, a deeper sense of purpose, and more compassionate relationships. When you start your day in a posture of gratitude and surrender, you are less likely to be thrown off course by life's inevitable challenges.
          </p>
        </div>

        {/* Related Links */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>Related Prayers &amp; Blessings</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { label: 'Evening Prayers', href: '/prayers/evening-prayers' },
              { label: 'Gratitude Prayers', href: '/prayers/gratitude-prayers' },
              { label: 'Family Blessings', href: '/blessings/family-blessings' },
              { label: 'Prayers for Strength', href: '/prayers/prayers-for-strength' },
            ].map((l: { label: string; href: string }) => ( // Fix: keep the related-link item properties scoped to the map iterator.
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)', transition: 'all 0.2s' }}>
                {l.label}{/* Fix: reference the mapped object's label instead of an undefined label variable. */}
              </Link>
            ))}
          </div>
        </div>

        <AdSlot id="ad-morning-bottom" />
      </div>
    </div>
  );
}
