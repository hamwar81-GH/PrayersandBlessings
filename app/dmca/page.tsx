import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA Policy | Prayers and Blessings',
  description: 'DMCA copyright notice and takedown policy for Prayers and Blessings.',
  alternates: { canonical: 'https://prayersandblessings.net/dmca' },
};

export default function DmcaPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>DMCA</span>
          </nav>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>DMCA Policy</h1>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            Prayers and Blessings respects the intellectual property rights of others and expects users of our platform to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to notices of alleged copyright infringement.
          </p>
          {[
            { title: 'Filing a DMCA Notice', content: 'If you believe your copyrighted work has been reproduced on our site without authorization, please send a written DMCA takedown notice to our designated agent at dmca@prayersandblessings.net. Your notice must include: (1) A description of the copyrighted work you claim has been infringed. (2) The URL or location of the infringing material. (3) Your contact information including name, address, phone number, and email. (4) A statement that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law. (5) A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf. (6) Your electronic or physical signature.' },
            { title: 'Our Response', content: 'Upon receipt of a valid DMCA notice, we will remove or disable access to the allegedly infringing material promptly. We will notify the user who posted the material of the takedown. We will forward the notice to the user so they may file a counter-notification if appropriate.' },
            { title: 'Counter-Notification', content: 'If you believe your content was removed incorrectly, you may file a counter-notification with us. We will restore the content within 10–14 business days unless the copyright claimant files a court action against you.' },
            { title: 'Repeat Infringers', content: 'It is our policy to terminate the accounts of users who repeatedly infringe copyright in appropriate circumstances.' },
          ].map((s, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(201,169,110,0.12)', paddingBottom: '1.75rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>{s.title}</h2>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.92rem', color: '#3A3A3A', lineHeight: 1.85 }}>{s.content}</p>
            </div>
          ))}
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#9B9B9B' }}>
            DMCA Agent: contact at <a href="mailto:dmca@prayersandblessings.net" style={{ color: '#C9A96E' }}>dmca@prayersandblessings.net</a> | 123 Faith Lane, Grace City, CA 90001, USA
          </p>
        </div>
      </div>
    </div>
  );
}
