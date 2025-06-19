import React from 'react';

interface PixelMascotProps {
  size?: number;
  style?: React.CSSProperties;
}

// Maskot pixel art: kelinci imut, warna cerah, telinga panjang, pipi pink, hati merah
const PixelMascot: React.FC<PixelMascotProps> = ({ size = 96, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Telinga kiri panjang */}
    <rect x="3" y="0" width="2" height="8" fill="#fff" stroke="#222" strokeWidth="0.5" />
    <rect x="3" y="2" width="2" height="4" fill="#F9A8D4" />
    {/* Telinga kanan panjang */}
    <rect x="19" y="0" width="2" height="8" fill="#fff" stroke="#222" strokeWidth="0.5" />
    <rect x="19" y="2" width="2" height="4" fill="#F9A8D4" />
    {/* Kepala kelinci */}
    <rect x="5" y="6" width="14" height="10" fill="#fff" stroke="#222" strokeWidth="0.5" />
    {/* Mata biru muda */}
    <rect x="8" y="10" width="2" height="2" fill="#60A5FA" />
    <rect x="14" y="10" width="2" height="2" fill="#60A5FA" />
    {/* Pipi pink */}
    <rect x="7" y="13" width="2" height="1" fill="#F9A8D4" />
    <rect x="15" y="13" width="2" height="1" fill="#F9A8D4" />
    {/* Hidung pink */}
    <rect x="11" y="12" width="2" height="1" fill="#F472B6" />
    {/* Mulut */}
    <rect x="12" y="13" width="1" height="1" fill="#222" />
    {/* Hati merah di tengah */}
    <rect x="9" y="16" width="6" height="2" fill="#E53935" />
    <rect x="10" y="18" width="4" height="2" fill="#E53935" />
    {/* Badan kelinci */}
    <rect x="8" y="16" width="8" height="4" fill="#fff" stroke="#222" strokeWidth="0.5" />
    {/* Kaki */}
    <rect x="8" y="20" width="2" height="2" fill="#fff" stroke="#222" strokeWidth="0.5" />
    <rect x="14" y="20" width="2" height="2" fill="#fff" stroke="#222" strokeWidth="0.5" />
    {/* Outline bawah */}
    <rect x="7" y="22" width="10" height="2" fill="#222" />
  </svg>
);

export default PixelMascot; 