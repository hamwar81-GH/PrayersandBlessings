import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | Prayers and Blessings',
  description: 'Learn how Prayers and Blessings uses cookies to improve your experience and serve relevant content.',
  alternates: { canonical: 'https://prayersandblessings.net/cookies-policy' },
};

export default function CookiesPolicyPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Cookies Policy</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>Cookies Policy</h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#9B9B9B' }}>Last updated: January 1, 2026</p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
          This Cookies Policy explains how Prayers and Blessings uses cookies and similar tracking technologies on prayersandblessings.net.
        </p>
        {[
          { title: 'What Are Cookies?', content: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, analyze traffic, and provide a better user experience. Cookies cannot run programs or deliver viruses to your device.' },
          { title: 'Types of Cookies We Use', content: 'Essential Cookies: Required for core site functionality such as navigation and security. These cannot be disabled. Analytics Cookies: We use Google Analytics to understand how visitors interact with our website. This helps us improve content and user experience. Advertising Cookies: Google AdSense uses cookies to serve relevant advertisements based on your browsing history. These are third-party cookies governed by Google\'s Privacy Policy. Preference Cookies: These remember your settings and preferences to personalize your experience.' },
          { title: 'Third-Party Cookies', content: 'Some cookies on our site are set by third-party services including Google Analytics (analytics), Google AdSense (advertising), and embedded social media widgets. These third parties have their own privacy and cookie policies which govern their use of cookies.' },
          { title: 'Managing Cookies', content: 'You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that disabling cookies may affect the functionality of our website. You can also opt out of Google\'s use of cookies for advertising by visiting Google\'s Ads Settings page.' },
          { title: 'Your Consent', content: 'By continuing to use our website after seeing our cookie notice, you consent to our use of cookies as described in this policy. You may withdraw consent at any time by clearing cookies in your browser and not continuing to use our site.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(201,169,110,0.12)', paddingBottom: '1.75rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>{s.title}</h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.92rem', color: '#3A3A3A', lineHeight: 1.85 }}>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
