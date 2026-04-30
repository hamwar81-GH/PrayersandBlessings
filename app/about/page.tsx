import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Prayers and Blessings — Our Story & Mission',
  description: 'Learn about Prayers and Blessings — our mission, editorial team, and commitment to providing premium spiritual content for seekers worldwide.',
  alternates: { canonical: 'https://prayersandblessings.net/about' },
  openGraph: { title: 'About Prayers and Blessings', description: 'Our story, mission, and editorial commitment.', url: 'https://prayersandblessings.net/about' },
};

const team = [
  { name: 'Grace Ellison', role: 'Founder & Editor-in-Chief', bio: 'A lifelong student of spirituality and contemplative prayer, Grace founded Prayers & Blessings in 2020 with a vision to make beautiful, authentic spiritual content accessible to all.', initials: 'GE' },
  { name: 'Samuel Ward', role: 'Senior Devotional Writer', bio: 'With a background in theology and pastoral care, Samuel brings deep spiritual knowledge and heartfelt writing to every prayer and blessing he crafts for our community.', initials: 'SW' },
  { name: 'Naomi Chen', role: 'Content Strategist & Editor', bio: 'Naomi ensures every piece of content meets our rigorous editorial standards for spiritual authenticity, readability, and positive impact on our readers.', initials: 'NC' },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #DDE6D5 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>About Us</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            About Prayers and Blessings
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '640px' }}>
            We are a premium spiritual editorial platform dedicated to helping people find peace, healing, and hope through the power of prayers and blessings.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div className="prose-spiritual">
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>Our Mission</h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Prayers and Blessings was founded in 2020 with a singular mission: to create the world's most beautiful, authentic, and spiritually nourishing home for prayers and blessings online. We believe that access to meaningful spiritual content can transform lives — bringing peace to troubled hearts, hope to the weary, and connection to the divine for all who seek it.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            Since our founding, we have grown to serve over 2.4 million readers worldwide. Every prayer, blessing, and guide on this site is crafted with careful attention to spiritual depth, editorial quality, and genuine usefulness for real people in real moments of need.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {[
              { title: 'Authenticity', desc: 'Every prayer is written with sincerity, spiritual integrity, and genuine care for the reader.' },
              { title: 'Inclusivity', desc: 'Our content is written in a universal spiritual tone welcoming to all people of faith and goodwill.' },
              { title: 'Excellence', desc: 'We hold our editorial work to the highest standards of quality, accuracy, and spiritual depth.' },
              { title: 'Service', desc: 'We are driven by a deep desire to serve our community with content that genuinely helps and uplifts.' },
            ].map((v) => (
              <div key={v.title} style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#C9A96E', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>Our Editorial Team</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {team.map((member) => (
              <div key={member.name} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: '#FAF7F2', flexShrink: 0 }}>{member.initials}</div>
                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.6rem', letterSpacing: '0.03em' }}>{member.role}</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.65 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.08), rgba(221,230,213,0.3))', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>Get in Touch</h3>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#6B6B6B', marginBottom: '1.25rem' }}>We love hearing from our readers. Reach out with questions, prayer requests, or partnership inquiries.</p>
            <Link href="/contact" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2', padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', display: 'inline-block' }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
