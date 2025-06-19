import React from 'react';

interface PixelHeartProps {
  size?: number;
  style?: React.CSSProperties;
}

const PixelHeart: React.FC<PixelHeartProps> = ({ size = 24, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="8" width="6" height="6" fill="#F472B6" />
    <rect x="14" y="8" width="6" height="6" fill="#F472B6" />
    <rect x="2" y="14" width="20" height="6" fill="#F472B6" />
    <rect x="6" y="4" width="4" height="4" fill="#F9A8D4" />
    <rect x="14" y="4" width="4" height="4" fill="#F9A8D4" />
  </svg>
);

export default PixelHeart; 