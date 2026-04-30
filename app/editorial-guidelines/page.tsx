import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Guidelines | Prayers and Blessings',
  description: 'Our editorial standards and process for creating prayers, blessings, and spiritual content. Learn how we ensure accuracy, authenticity, and spiritual depth.',
  alternates: { canonical: 'https://prayersandblessings.net/editorial-guidelines' },
};

export default function EditorialGuidelinesPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #DDE6D5 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Editorial Guidelines</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>Editorial Guidelines</h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            Our commitment to creating authentic, high-quality spiritual content begins with rigorous editorial standards.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              title: 'Our Editorial Mission',
              content: 'Every piece of content published on Prayers and Blessings is created with a singular mission: to genuinely serve our readers\' spiritual needs. We do not publish content for search engine rankings alone — every prayer, blessing, and guide must first and foremost offer real value to someone seeking spiritual nourishment, comfort, or guidance.',
            },
            {
              title: 'Content Creation Process',
              content: 'Our content creation follows a multi-step process: (1) Research and spiritual grounding — writers research the topic thoroughly, consulting established spiritual traditions and authentic devotional literature. (2) Original writing — all prayers and blessings are written originally by our qualified team, not copied or aggregated from other sources. (3) Theological review — content is reviewed for spiritual accuracy, inclusivity, and authenticity. (4) Editorial review — an experienced editor checks for quality, clarity, and alignment with our standards. (5) Publication and ongoing review — content is regularly reviewed and updated as needed.',
            },
            {
              title: 'Writer Qualifications',
              content: 'Our writing team consists of individuals with backgrounds in theology, pastoral ministry, spiritual direction, or contemplative practice. All writers are required to demonstrate genuine knowledge of and personal commitment to spiritual practice. Guest contributors are carefully vetted and their credentials verified before publication.',
            },
            {
              title: 'Accuracy and Authenticity',
              content: 'We are committed to spiritual authenticity. Our prayers and blessings are written to reflect genuine devotional tradition rather than trending content. We do not make unverifiable spiritual claims, and we clearly distinguish between established spiritual wisdom and personal reflection. All factual claims in our guides are sourced and verifiable.',
            },
            {
              title: 'Inclusivity Standards',
              content: 'Our content is written to be accessible and meaningful to people of various Christian and broadly spiritual traditions. We avoid denominational specificity that would exclude readers, while maintaining genuine spiritual depth. We do not publish content that excludes, demeans, or discriminates against any group of people.',
            },
            {
              title: 'Advertising Independence',
              content: 'Advertisements displayed on our website have no influence on our editorial content. We do not accept payment for positive coverage of any product, service, or organization. Our editorial decisions are made solely on the basis of what serves our readers. We comply fully with FTC disclosure requirements.',
            },
            {
              title: 'Corrections Policy',
              content: 'We are committed to accuracy. If errors are identified in our content, we correct them promptly and transparently. Significant corrections are noted within the article. We welcome reader feedback and corrections at editorial@prayersandblessings.net.',
            },
          ].map((s, i) => (
            <div key={i} style={{ background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>{s.title}</h2>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.92rem', color: '#3A3A3A', lineHeight: 1.85 }}>{s.content}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(201,169,110,0.06)', borderRadius: '12px', border: '1px solid rgba(201,169,110,0.12)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#3A3A3A' }}>
            Questions about our editorial standards? Contact our editorial team at{' '}
            <a href="mailto:editorial@prayersandblessings.net" style={{ color: '#C9A96E' }}>editorial@prayersandblessings.net</a>
          </p>
        </div>
      </div>
    </div>
  );
}
