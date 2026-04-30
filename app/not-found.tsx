import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🕊️</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, marginBottom: '2rem' }}>
          This page could not be found. Perhaps a prayer will guide you back to the right place.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2', padding: '0.75rem 1.5rem', borderRadius: '10px', textDecoration: 'none' }}>Return Home</Link>
          <Link href="/prayers" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem', border: '1.5px solid rgba(201,169,110,0.5)', color: '#C9A96E', padding: '0.75rem 1.5rem', borderRadius: '10px', textDecoration: 'none' }}>Browse Prayers</Link>
        </div>
      </div>
    </div>
  );
}
