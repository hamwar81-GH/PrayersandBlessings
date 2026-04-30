import Link from 'next/link';

const currentYear = new Date().getFullYear();

const footerLinks = {
  Prayers: [
    { label: 'Morning Prayers', href: '/prayers/morning-prayers' },
    { label: 'Healing Prayers', href: '/prayers/healing-prayers' },
    { label: 'Protection Prayers', href: '/prayers/protection-prayers' },
    { label: 'Gratitude Prayers', href: '/prayers/gratitude-prayers' },
    { label: 'Prayers for Anxiety', href: '/prayers/prayers-for-anxiety' },
  ],
  Blessings: [
    { label: 'Family Blessings', href: '/blessings/family-blessings' },
    { label: 'Birthday Blessings', href: '/blessings/birthday-blessings' },
    { label: 'Bedtime Blessings', href: '/blessings/bedtime-blessings' },
    { label: 'Success Blessings', href: '/blessings/success-blessings' },
    { label: 'Wedding Blessings', href: '/blessings/wedding-blessings' },
  ],
  Resources: [
    { label: 'Collections', href: '/collections' },
    { label: 'Guides', href: '/guides' },
    { label: 'HTML Sitemap', href: '/sitemap' },
    { label: 'RSS Feed', href: '/feed.xml' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Cookies Policy', href: '/cookies-policy' },
    { label: 'DMCA', href: '/dmca' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/prayersandblessings', icon: '📸' },
  { label: 'Pinterest', href: 'https://pinterest.com/prayersandblessings', icon: '📌' },
  { label: 'YouTube', href: 'https://youtube.com/@prayersandblessings', icon: '▶️' },
  { label: 'TikTok', href: 'https://tiktok.com/@prayersandblessings', icon: '🎵' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1F1F1F', color: '#FAF7F2' }}>
      {/* Top Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>✦</div>
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 600 }}>Prayers &amp; Blessings</div>
            </div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(250,247,242,0.65)', marginBottom: '1.5rem' }}>
              A premium spiritual editorial platform dedicated to helping you find peace, healing, and hope through the power of prayers and blessings.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="footer-social-hover"
                  style={{
                    width: '38px', height: '38px',
                    background: 'rgba(201,169,110,0.15)',
                    border: '1px solid rgba(201,169,110,0.2)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', fontSize: '1rem', transition: 'all 0.2s ease',
                  }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.05rem', fontWeight: 600, color: '#C9A96E', marginBottom: '1rem', letterSpacing: '0.03em' }}>{title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover-text-gold" style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.83rem',
                      color: 'rgba(250,247,242,0.65)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', padding: '1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'rgba(250,247,242,0.5)' }}>
            📧 <a href="mailto:contact@prayersandblessings.net" style={{ color: '#C9A96E', textDecoration: 'none' }}>contact@prayersandblessings.net</a>
          </span>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'rgba(250,247,242,0.5)' }}>
            📍 123 Faith Lane, Grace City, CA 90001, USA
          </span>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'rgba(250,247,242,0.5)' }}>
            📞 +1 (800) 555-PRAY
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.4)' }}>
            © {currentYear} Prayers and Blessings. All rights reserved. Spreading light and hope since 2020.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Use', href: '/terms-of-use' },
              { label: 'Disclaimer', href: '/terms-of-use#disclaimer' },
              { label: 'DMCA', href: '/dmca' },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="hover-text-gold"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
