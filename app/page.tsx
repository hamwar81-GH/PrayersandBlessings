import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Prayers and Blessings 2026 | Daily Spiritual Devotionals for Peace & Hope',
  description: 'Discover powerful prayers and blessings for peace, healing, strength, and hope. Daily spiritual devotionals, morning prayers, family blessings, and inspirational guides.',
  alternates: { canonical: 'https://prayersandblessings.net' },
  openGraph: {
    title: 'Prayers and Blessings 2026 | Daily Spiritual Devotionals',
    description: 'Discover powerful prayers and blessings for peace, healing, strength, and hope.',
    url: 'https://prayersandblessings.net',
  },
};

const topicCards = [
  { title: 'Morning Prayers', desc: 'Start your day with intention, gratitude, and divine connection.', href: '/prayers/morning-prayers', icon: '🌅', color: '#FFF5E6' },
  { title: 'Healing Prayers', desc: 'Find comfort, restoration, and peace during illness and pain.', href: '/prayers/healing-prayers', icon: '💚', color: '#EFF6EE' },
  { title: 'Family Blessings', desc: 'Blessings for unity, protection, and love within your family.', href: '/blessings/family-blessings', icon: '🏡', color: '#F5F0FF' },
  { title: 'Gratitude Prayers', desc: 'Cultivate a heart of thankfulness through daily gratitude.', href: '/prayers/gratitude-prayers', icon: '🙏', color: '#FFF8EC' },
  { title: 'Protection Prayers', desc: 'Shield yourself and loved ones with prayers of protection.', href: '/prayers/protection-prayers', icon: '🛡️', color: '#EEF4FF' },
  { title: 'Success Prayers', desc: 'Invite divine favor and guidance into your goals and work.', href: '/prayers/success-prayers', icon: '⭐', color: '#FFFBEC' },
];

const collections = [
  { title: '21 Powerful Morning Prayers', count: '21 Prayers', desc: 'A curated collection to awaken your spirit each morning.', href: '/collections/21-morning-prayers', tag: 'Popular' },
  { title: 'Bedtime Blessings Collection', count: '15 Blessings', desc: 'Close each day with gratitude and peaceful blessings.', href: '/collections/bedtime-blessings', tag: 'Beloved' },
  { title: 'Prayers for Difficult Times', count: '18 Prayers', desc: 'Strength and hope when life feels overwhelming.', href: '/collections/prayers-difficult-times', tag: 'Healing' },
  { title: 'Family Blessing Bundle', count: '12 Blessings', desc: 'Complete blessings for every family member and occasion.', href: '/collections/family-blessing-bundle', tag: 'New' },
];

const trendingArticles = [
  {
    title: '7 Powerful Healing Prayers for the Sick and Suffering',
    excerpt: 'These gentle yet powerful prayers bring comfort, hope, and divine restoration to those who are suffering.',
    href: '/prayers/healing-prayers',
    category: 'Healing',
    readTime: '5 min read',
  },
  {
    title: 'A Morning Prayer Routine That Will Transform Your Day',
    excerpt: 'Discover a 10-minute morning prayer practice that grounds you in gratitude and sets a peaceful tone.',
    href: '/prayers/morning-prayers',
    category: 'Morning',
    readTime: '4 min read',
  },
  {
    title: 'The Most Beautiful Blessings for Families in 2026',
    excerpt: 'Heartfelt blessings to speak over your family, strengthening bonds and inviting divine protection.',
    href: '/blessings/family-blessings',
    category: 'Family',
    readTime: '6 min read',
  },
];

const faqs = [
  { q: 'How often should I pray?', a: 'Prayer has no fixed schedule — many find morning and evening prayers most grounding. Even a few moments of sincere prayer daily creates a meaningful spiritual practice.' },
  { q: 'What is the difference between prayers and blessings?', a: 'Prayers are conversations with the divine — requests, gratitude, or praise. Blessings are spoken declarations of goodness and favor over people, places, or situations.' },
  { q: 'Can I use these prayers for any faith?', a: 'Our prayers and blessings are written in a universal spiritual tone suitable for Christians, interdenominational believers, and those of broader spiritual faith.' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 60%, #F5EFE6 100%)', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(221,230,213,0.4) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left: Hero Text */}
          <div className="animate-fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '999px', padding: '0.35rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem' }}>✦</span>
              <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A96E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Daily Devotionals</span>
            </div>

            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 400, color: '#1F1F1F', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Daily Prayers and Blessings for{' '}
              <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>Peace, Hope</span>{' '}
              and Strength
            </h1>

            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
              Discover prayers and blessings that speak directly to your heart. Begin each day with purpose, find comfort in difficult moments, and share divine blessings with those you love.
            </p>

            {/* Search Bar */}
            <form action="/search" method="get" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', maxWidth: '460px' }}>
              <input
                type="search"
                name="q"
                placeholder="Search for prayers, blessings..."
                style={{
                  flex: 1, border: '1.5px solid rgba(201,169,110,0.35)', borderRadius: '12px',
                  padding: '0.75rem 1.1rem', fontSize: '0.9rem', background: '#FAF7F2',
                  color: '#1F1F1F', outline: 'none', fontFamily: 'Manrope, sans-serif',
                }}
              />
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2',
                border: 'none', borderRadius: '12px', padding: '0.75rem 1.25rem',
                cursor: 'pointer', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.85rem',
              }}>Search</button>
            </form>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blessings" style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2',
                padding: '0.8rem 1.75rem', borderRadius: '12px', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(201,169,110,0.35)', transition: 'all 0.2s ease',
              }}>Explore Blessings →</Link>
              <Link href="/prayers" style={{
                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                border: '1.5px solid rgba(201,169,110,0.5)', color: '#C9A96E',
                padding: '0.8rem 1.75rem', borderRadius: '12px', textDecoration: 'none',
                background: 'transparent', transition: 'all 0.2s ease',
              }}>Read Prayers</Link>
            </div>
          </div>

          {/* Right: Featured Devotional Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{
              background: '#FFFCF7',
              border: '1px solid rgba(201,169,110,0.2)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 8px 40px rgba(31,31,31,0.08)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2', borderRadius: '0 0 12px 12px', padding: '0.3rem 1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Today's Blessing
              </div>
              <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✦</div>
                <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontStyle: 'italic', color: '#3A3A3A', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  &ldquo;May you be blessed with peace that surpasses understanding, joy that overcomes sorrow, and love that endures forever.&rdquo;
                </blockquote>
                <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #DFC08A, #C9A96E)', margin: '0 auto 1rem', borderRadius: '1px' }} />
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em' }}>Daily Blessing</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#9B9B9B', marginTop: '0.3rem' }}>Prayers &amp; Blessings Editorial</p>
              </div>
              <div style={{ marginTop: '1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', textAlign: 'center' }}>
                {[['2.4M+', 'Readers'], ['500+', 'Prayers'], ['150+', 'Collections']].map(([num, lbl]) => (
                  <div key={lbl} style={{ background: 'rgba(201,169,110,0.07)', borderRadius: '10px', padding: '0.6rem 0.4rem' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#C9A96E' }}>{num}</div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: '#9B9B9B', fontWeight: 500 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stack vertically */}
        <style>{`@media (max-width:768px){section:first-of-type > div{grid-template-columns:1fr!important;gap:2rem!important;}}`}</style>
      </section>

      {/* ===== ADSENSE AFTER HERO ===== */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot id="ad-after-hero" />
      </div>

      {/* ===== TOPIC DISCOVERY GRID ===== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="gold-divider" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>
            Explore Prayers &amp; Blessings
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: '#6B6B6B', maxWidth: '500px', margin: '0 auto' }}>
            Discover spiritual content curated for every season of your journey.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {topicCards.map((card) => (
            <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
              <article className="hover-lift-md" style={{
                background: card.color,
                border: '1px solid rgba(201,169,110,0.12)',
                borderRadius: '20px',
                padding: '1.75rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
              }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.35rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.65 }}>{card.desc}</p>
                <div style={{ marginTop: '1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#C9A96E', letterSpacing: '0.03em' }}>
                  Explore → 
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 100%)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="gold-divider" style={{ marginBottom: '0.75rem' }} />
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 500, color: '#1F1F1F' }}>
                Featured Collections
              </h2>
            </div>
            <Link href="/collections" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#C9A96E', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.35)', padding: '0.5rem 1.25rem', borderRadius: '8px' }}>
              View All Collections
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {collections.map((col) => (
              <Link key={col.href} href={col.href} style={{ textDecoration: 'none' }}>
                <article className="hover-lift-sm" style={{
                  background: '#FAF7F2',
                  border: '1px solid rgba(201,169,110,0.15)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                >
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(201,169,110,0.12)', color: '#C9A96E', borderRadius: '999px', padding: '0.2rem 0.75rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                    {col.tag}
                  </div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>{col.count}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem', lineHeight: 1.3 }}>{col.title}</h3>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: '#6B6B6B', lineHeight: 1.6 }}>{col.desc}</p>
                  <div style={{ marginTop: '1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#C9A96E' }}>Read Collection →</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AD BETWEEN SECTIONS ===== */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot id="ad-mid-page" />
      </div>

      {/* ===== TRENDING ARTICLES ===== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="gold-divider" style={{ marginBottom: '0.75rem' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 500, color: '#1F1F1F' }}>
            Trending Devotionals
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {trendingArticles.map((article, i) => (
            <article key={i} style={{
              borderBottom: '2px solid rgba(201,169,110,0.15)',
              paddingBottom: '1.5rem',
              transition: 'all 0.2s ease',
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{
                  fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700,
                  background: 'rgba(201,169,110,0.1)', color: '#C9A96E',
                  padding: '0.2rem 0.7rem', borderRadius: '999px', letterSpacing: '0.05em',
                }}>{article.category}</span>
                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#9B9B9B' }}>{article.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                <Link href={article.href} className="hover-text-gold" style={{ color: '#1F1F1F', textDecoration: 'none', transition: 'color 0.2s' }}>{article.title}</Link>
              </h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.65, marginBottom: '1rem' }}>{article.excerpt}</p>
              <Link href={article.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#C9A96E', textDecoration: 'none' }}>
                Read {article.title} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DAILY BLESSING BLOCK ===== */}
      <section style={{ background: 'linear-gradient(135deg, #1F1F1F 0%, #2D2A25 100%)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(221,230,213,0.05) 0%, transparent 50%)' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#C9A96E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>✦ Daily Blessing ✦</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#FAF7F2', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Receive Your Daily Blessing
          </h2>
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontStyle: 'italic', color: 'rgba(250,247,242,0.85)', lineHeight: 1.65, marginBottom: '2rem', padding: '0 2rem' }}>
            &ldquo;May the blessings of this day fill your heart with joy, your home with warmth, and your spirit with unshakeable peace.&rdquo;
          </blockquote>
          <div style={{ width: '50px', height: '2px', background: '#C9A96E', margin: '0 auto 2rem', borderRadius: '1px' }} />
          <Link href="/blessings" style={{
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem',
            background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#1F1F1F',
            padding: '0.85rem 2rem', borderRadius: '12px', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(201,169,110,0.3)', display: 'inline-block',
          }}>Receive More Blessings</Link>
        </div>
      </section>

      {/* ===== QUOTE / REFLECTION ===== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { quote: '"Prayer does not change God, but it changes the one who prays."', attr: '— Søren Kierkegaard' },
            { quote: '"Blessed are those who give without remembering and take without forgetting."', attr: '— Elizabeth Bibesco' },
            { quote: '"To pray is to let go and let God take over."', attr: '— Spiritual Wisdom' },
          ].map((q, i) => (
            <div key={i} style={{
              background: i === 1 ? 'linear-gradient(135deg, #C9A96E 0%, #DFC08A 100%)' : '#FAF7F2',
              border: '1px solid rgba(201,169,110,0.15)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontStyle: 'italic', color: i === 1 ? '#FAF7F2' : '#3A3A3A', lineHeight: 1.65, marginBottom: '1rem' }}>{q.quote}</p>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: i === 1 ? 'rgba(250,247,242,0.8)' : '#C9A96E', letterSpacing: '0.05em' }}>{q.attr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section id="newsletter" style={{ background: 'linear-gradient(160deg, #F5EDE0 0%, #EDE3F5 100%)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.75rem' }}>
            Receive Daily Blessings in Your Inbox
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '2rem' }}>
            Join over 2.4 million readers who start each day with our curated prayers and blessings. Free, beautiful, and uplifting — delivered daily.
          </p>
          <form style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input type="email" placeholder="Enter your email address"
              required
              style={{
                flex: 1, minWidth: '220px', border: '1.5px solid rgba(201,169,110,0.3)',
                borderRadius: '12px', padding: '0.85rem 1.25rem', fontSize: '0.9rem',
                background: '#FAF7F2', color: '#1F1F1F', outline: 'none',
                fontFamily: 'Manrope, sans-serif',
              }} />
            <button type="submit" style={{
              fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem',
              background: 'linear-gradient(135deg, #C9A96E, #DFC08A)', color: '#FAF7F2',
              border: 'none', borderRadius: '12px', padding: '0.85rem 1.75rem',
              cursor: 'pointer', boxShadow: '0 4px 20px rgba(201,169,110,0.3)',
            }}>Subscribe Free</button>
          </form>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#9B9B9B', marginTop: '1rem' }}>
            No spam, ever. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="gold-divider" style={{ margin: '0 auto 0.75rem' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 500, color: '#1F1F1F' }}>
            Frequently Asked Questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#FAF7F2', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '16px', padding: '1.5rem 1.75rem' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontWeight: 500, color: '#1F1F1F', marginBottom: '0.6rem' }}>{faq.q}</h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#6B6B6B', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }} />
      </section>

      {/* ===== AD BEFORE FOOTER ===== */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot id="ad-before-footer" />
      </div>
    </>
  );
}
