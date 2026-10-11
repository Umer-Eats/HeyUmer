import { ImageResponse } from 'next/og';
import { characterParts } from '@/components/Logo';

export const alt = 'Umer Qureshi — inquiry & impact, for everyone';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The card shown when the site is shared or surfaced in search.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 80px',
          background: '#ffffff',
          color: '#171717',
        }}
      >
        <svg width="340" height="340" viewBox="0 0 120 120" fill="none">
          {characterParts({ ink: '#171717' })}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, letterSpacing: 5, lineHeight: 1.05 }}>umer qureshi</div>
          <div style={{ marginTop: 22, fontSize: 34, letterSpacing: 3, color: '#444444' }}>
            inquiry &amp; impact, for everyone
          </div>
          <div style={{ marginTop: 36, fontSize: 26, letterSpacing: 3, color: '#767676' }}>
            engineer · researcher · builder
          </div>
        </div>
      </div>
    ),
    size,
  );
}
