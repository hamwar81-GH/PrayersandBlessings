import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prayers and Blessings',
  description: 'Read the Prayers and Blessings Privacy Policy. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://prayersandblessings.net/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you subscribe to our newsletter, contact us, or interact with our content. This may include your name, email address, and any messages you send us. We also automatically collect certain technical information when you visit our site, including IP address, browser type, operating system, referring URLs, and pages visited. This data is collected via cookies and similar technologies to help us improve our service.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to send our daily prayers and blessings newsletter (if you have subscribed), respond to your inquiries and prayer requests, analyze and improve our website content and user experience, comply with legal obligations, and deliver relevant advertising through Google AdSense and similar networks. We do not sell, trade, or rent your personal information to third parties.' },
    { title: 'Cookies and Tracking', content: 'Our website uses cookies to enhance your browsing experience. These include essential cookies required for the site to function, analytics cookies (via Google Analytics) that help us understand how visitors use our site, and advertising cookies used by Google AdSense to serve relevant advertisements. You can control cookie preferences through your browser settings or our cookie consent banner.' },
    { title: 'Google AdSense', content: 'We use Google AdSense to display advertisements on our site. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google Ads Settings. We have no direct control over the ads served by Google AdSense.' },
    { title: 'Data Security', content: 'We take reasonable precautions to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security of your data.' },
    { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information that we hold. You may unsubscribe from our newsletter at any time using the unsubscribe link in any email. For data requests or deletion, please contact us at privacy@prayersandblessings.net.' },
    { title: 'Children\'s Privacy', content: 'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.' },
    { title: 'Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Your continued use of our site after changes constitutes acceptance of the updated policy.' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Privacy Policy</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#9B9B9B' }}>Last updated: January 1, 2026 | Effective: January 1, 2026</p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem', padding: '1.25rem 1.5rem', background: 'rgba(201,169,110,0.06)', borderRadius: '12px', borderLeft: '3px solid #C9A96E' }}>
          Prayers and Blessings (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates prayersandblessings.net. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. Please read this policy carefully.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(201,169,110,0.12)', paddingBottom: '1.75rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</h2>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.92rem', color: '#3A3A3A', lineHeight: 1.85 }}>{s.content}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(201,169,110,0.06)', borderRadius: '12px', border: '1px solid rgba(201,169,110,0.12)' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#3A3A3A', lineHeight: 1.75 }}>
            <strong>Contact:</strong> If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@prayersandblessings.net" style={{ color: '#C9A96E' }}>privacy@prayersandblessings.net</a>{' '}
            or write to: 123 Faith Lane, Grace City, CA 90001, USA.
          </p>
        </div>
      </div>
    </div>
  );
}
