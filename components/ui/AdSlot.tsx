'use client';

interface AdSlotProps {
  id: string;
  label?: string;
  className?: string;
}

export default function AdSlot({ id, label = 'Advertisement', className = '' }: AdSlotProps) {
  return (
    <div className={`adsense-slot py-4 px-6 my-8 ${className}`} id={id}>
      <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: '#C9A96E', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {label}
      </p>
      {/* Replace with actual AdSense script */}
      {/* <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXX" data-ad-slot="XXXXX" data-ad-format="auto"></ins> */}
      <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(201,169,110,0.4)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif' }}>
        [Ad Space]
      </div>
    </div>
  );
}
