import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Search Prayers and Blessings | Find the Perfect Prayer',
  description: 'Search our collection of over 500 prayers and blessings. Find morning prayers, healing prayers, family blessings, and more.',
  alternates: { canonical: 'https://prayersandblessings.net/search' },
};

const popularSearches = [
  { label: 'Morning Prayers', href: '/prayers/morning-prayers' },
  { label: 'Healing Prayers', href: '/prayers/healing-prayers' },
  { label: 'Family Blessings', href: '/blessings/family-blessings' },
  { label: 'Prayer for Anxiety', href: '/prayers/prayers-for-anxiety' },
  { label: 'Bedtime Blessings', href: '/blessings/bedtime-blessings' },
  { label: 'Gratitude Prayers', href: '/prayers/gratitude-prayers' },
];

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="gold-divider" style={{ margin: '0 auto 1rem' }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1.5rem' }}>
            {query ? `Search Results for "${query}"` : 'Search Prayers & Blessings'}
          </h1>
          <form action="/search" method="get" style={{ display: 'flex', gap: '0.5rem', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search for prayers, blessings, guides..."
              style={{
                flex: 1, border: '1.5px solid rgba(201,169,110,0.35)', borderRadius: '12px',
                padding: '0.85rem 1.25rem', fontSize: '0.95rem', background: '#FAF7F2',
                color: '#1F1F1F', outline: 'none', fontFamily: 'Manrope, sans-serif',
              }}
            />
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2',
              border: 'none', borderRadius: '12px', padding: '0.85rem 1.25rem',
              cursor: 'pointer', fontFamily: 'Manrope, sans-serif', fontWeight: 600,
            }}>Search</button>
          </form>
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {!query ? (
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1.25rem' }}>Popular Searches</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              {popularSearches.map((s) => (
                <Link key={s.href} href={s.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.08)', padding: '0.5rem 1.1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)', transition: 'all 0.2s' }}>
                  {s.label}
                </Link>
              ))}
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1.25rem' }}>Browse by Category</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'All Prayers', href: '/prayers', icon: '🙏' },
                { label: 'All Blessings', href: '/blessings', icon: '✨' },
                { label: 'Collections', href: '/collections', icon: '📚' },
                { label: 'Guides', href: '/guides', icon: '📖' },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="hover-shadow-soft" style={{ textDecoration: 'none', background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '16px', padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontWeight: 500, color: '#1F1F1F' }}>{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#6B6B6B', marginBottom: '2rem' }}>
              Showing results for <strong>&quot;{query}&quot;</strong>. Browse our categories to find exactly what you need.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {popularSearches.map((s) => (
                <Link key={s.href} href={s.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.08)', padding: '0.45rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
