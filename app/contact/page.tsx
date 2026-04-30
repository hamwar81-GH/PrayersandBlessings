import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Prayers and Blessings',
  description: 'Get in touch with the Prayers and Blessings team. Send us your prayer requests, questions, feedback, or partnership inquiries.',
  alternates: { canonical: 'https://prayersandblessings.net/contact' },
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #DDE6D5 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Contact Us</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Contact Prayers and Blessings
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '580px' }}>
            We would love to hear from you. Whether you have a prayer request, feedback, or partnership inquiry — our team is here for you.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.7rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '📧', label: 'Email', value: 'contact@prayersandblessings.net', href: 'mailto:contact@prayersandblessings.net' },
                { icon: '📍', label: 'Address', value: '123 Faith Lane, Grace City, CA 90001, USA', href: null },
                { icon: '📞', label: 'Phone', value: '+1 (800) 555-PRAY', href: 'tel:+18005557729' },
                { icon: '⏰', label: 'Response Time', value: 'We reply within 1–2 business days', href: null },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', background: 'rgba(201,169,110,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A96E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#3A3A3A', textDecoration: 'none' }}>{item.value}</a>
                    ) : (
                      <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#3A3A3A' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.12)' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Instagram', href: 'https://instagram.com/prayersandblessings', icon: '📸' },
                  { label: 'Pinterest', href: 'https://pinterest.com/prayersandblessings', icon: '📌' },
                  { label: 'YouTube', href: 'https://youtube.com/@prayersandblessings', icon: '▶️' },
                  { label: 'TikTok', href: 'https://tiktok.com/@prayersandblessings', icon: '🎵' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 0.9rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.7rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1.5rem' }}>Send a Message</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Your Name', type: 'text', placeholder: 'Grace Smith' },
                { label: 'Email Address', type: 'email', placeholder: 'grace@example.com' },
                { label: 'Subject', type: 'text', placeholder: 'Prayer request, feedback...' },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#3A3A3A', display: 'block', marginBottom: '0.4rem' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder}
                    style={{ width: '100%', border: '1.5px solid rgba(201,169,110,0.25)', borderRadius: '10px', padding: '0.7rem 1rem', fontSize: '0.9rem', background: '#FAF7F2', color: '#1F1F1F', outline: 'none', fontFamily: 'Manrope, sans-serif', boxSizing: 'border-box' }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#3A3A3A', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                <textarea placeholder="Share your prayer request or message..." rows={5}
                  style={{ width: '100%', border: '1.5px solid rgba(201,169,110,0.25)', borderRadius: '10px', padding: '0.7rem 1rem', fontSize: '0.9rem', background: '#FAF7F2', color: '#1F1F1F', outline: 'none', fontFamily: 'Manrope, sans-serif', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button type="button" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2', border: 'none', borderRadius: '10px', padding: '0.85rem 1.75rem', cursor: 'pointer', width: '100%', boxShadow: '0 4px 20px rgba(201,169,110,0.3)' }}>
                Send Message
              </button>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#9B9B9B', textAlign: 'center' }}>
                We respect your privacy and never share your information.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </div>
  );
}
