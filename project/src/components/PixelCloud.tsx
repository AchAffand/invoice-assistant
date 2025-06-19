import React from 'react';

interface PixelCloudProps {
  size?: number;
  color1?: string;
  color2?: string;
  style?: React.CSSProperties;
}

// Pixel art cloud menggunakan SVG
export const PixelCloud: React.FC<PixelCloudProps> = ({
  size = 48,
  color1 = '#fff',
  color2 = '#f9a8d4',
  style = {},
}) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 48 28"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bagian utama awan */}
    <rect x="8" y="16" width="32" height="8" fill={color1} />
    <rect x="12" y="12" width="24" height="8" fill={color1} />
    <rect x="16" y="8" width="16" height="8" fill={color1} />
    {/* Highlight pink */}
    <rect x="20" y="20" width="8" height="4" fill={color2} />
    <rect x="28" y="16" width="4" height="4" fill={color2} />
    {/* Pinggiran */}
    <rect x="8" y="24" width="32" height="2" fill={color2} />
  </svg>
);

export default PixelCloud; 