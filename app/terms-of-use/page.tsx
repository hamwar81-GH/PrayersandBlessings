import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use & Disclaimer | Prayers and Blessings',
  description: 'Read the Terms of Use and Disclaimer for Prayers and Blessings. Understand your rights and responsibilities as a user of our platform.',
  alternates: { canonical: 'https://prayersandblessings.net/terms-of-use' },
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Terms of Use</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>Terms of Use &amp; Disclaimer</h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#9B9B9B' }}>Last updated: January 1, 2026</p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {[
          { title: 'Acceptance of Terms', content: 'By accessing and using prayersandblessings.net, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.' },
          { title: 'Use of Content', content: 'All content on this website — including prayers, blessings, articles, guides, and collections — is protected by copyright and belongs to Prayers and Blessings or its content creators. You may share individual prayers or blessings for personal, non-commercial use with appropriate attribution. Reproducing, republishing, or using our content for commercial purposes without written permission is strictly prohibited.' },
          { title: 'Disclaimer', content: 'The prayers, blessings, and spiritual content provided on this website are for inspirational and personal devotional purposes only. They do not constitute professional religious, psychological, medical, or legal advice. We make no claims about the outcomes of prayer. Please consult qualified professionals for medical, psychological, or legal matters.' },
          { title: 'Affiliate & Advertising Disclosure', content: 'Prayers and Blessings may display advertisements through Google AdSense and may participate in affiliate programs. We may earn compensation when you click on certain links or advertisements. All editorial content remains independent of our advertising relationships, in accordance with our Editorial Guidelines.' },
          { title: 'User Conduct', content: 'You agree not to misuse our website, including attempting to gain unauthorized access, transmitting harmful content, violating intellectual property rights, or using our platform for any unlawful purpose. We reserve the right to terminate access for violations of these terms.' },
          { title: 'Limitation of Liability', content: 'Prayers and Blessings and its team shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our total liability for any claims shall not exceed the amount you paid us in the past 12 months (which in most cases is zero, as our content is free).' },
          { title: 'Governing Law', content: 'These Terms of Use are governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Los Angeles County, California.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(201,169,110,0.12)', paddingBottom: '1.75rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.92rem', color: '#3A3A3A', lineHeight: 1.85 }}>{s.content}</p>
          </div>
        ))}
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#9B9B9B' }}>
          Questions? Contact us at <a href="mailto:legal@prayersandblessings.net" style={{ color: '#C9A96E' }}>legal@prayersandblessings.net</a>
        </p>
      </div>
    </div>
  );
}
