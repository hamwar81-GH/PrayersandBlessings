import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Building Prayer Routine 2026 | Complete Spiritual Guide | Prayers and Blessings',
  description: 'A comprehensive guide to Building Prayer Routine. Practical wisdom and proven steps for a meaningful prayers and blessings practice.',
  alternates: { canonical: 'https://prayersandblessings.net/guides/building-prayer-routine' },
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #E9E2F4 40%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9B9B9B', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/guides" style={{ color: '#C9A96E', textDecoration: 'none' }}>Guides</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>Building Prayer Routine</span>
          </nav>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1F1F1F', marginBottom: '1rem' }}>
            Building Prayer Routine: Prayers and Blessings Guide
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75 }}>
            A complete guide to Building Prayer Routine with practical spiritual wisdom and prayers and blessings for every step of the journey.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AdSlot id="ad-building-prayer-routine-top" />
        <div className="prose-spiritual">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '2rem' }}>
            This guide on Building Prayer Routine is designed to support everyone — from those just discovering the power of prayer to seasoned practitioners seeking fresh depth. These prayers and blessings are offered with sincerity and care for every heart.
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
            Getting Started
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Prayer and blessings are not complicated — they are simply a conversation with the divine. Begin with honesty, approach with openness, and trust that every sincere prayer carries weight and meaning far beyond what we can see or understand in the moment.
          </p>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.75, borderLeft: '3px solid #C9A96E', padding: '1.5rem', background: 'rgba(201,169,110,0.04)', borderRadius: '0 12px 12px 0', margin: '1.5rem 0' }}>
            &ldquo;The function of prayer is not to influence God, but rather to change the nature of the one who prays.&rdquo;
          </blockquote>
          <AdSlot id="ad-building-prayer-routine-mid" />
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>
            Building Your Practice
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Consistency is the cornerstone of any meaningful spiritual practice. Even five minutes of sincere prayers and blessings daily creates a cumulative spiritual depth that transforms how you see yourself, others, and the world around you.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3A3A3A', lineHeight: 1.85 }}>
            Use the collections and prayers found throughout this site as your companions on this journey. Return often, share with those you love, and allow the sacred tradition of prayers and blessings to become a living, breathing part of your daily life.
          </p>
        </div>
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(201,169,110,0.06)', borderRadius: '16px', border: '1px solid rgba(201,169,110,0.15)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '1rem' }}>Continue Your Journey</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[{label:'All Guides',href:'/guides'},{label:'Morning Prayers',href:'/prayers/morning-prayers'},{label:'Collections',href:'/collections'},{label:'About Us',href:'/about'}].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', fontWeight: 500, color: '#C9A96E', background: 'rgba(201,169,110,0.1)', padding: '0.4rem 1rem', borderRadius: '999px', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.2)' }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <AdSlot id="ad-building-prayer-routine-bottom" />
      </div>
    </div>
  );
}
