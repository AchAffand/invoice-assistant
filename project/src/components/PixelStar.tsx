import React from 'react';

interface PixelStarProps {
  size?: number;
  style?: React.CSSProperties;
}

const PixelStar: React.FC<PixelStarProps> = ({ size = 24, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="2" width="4" height="8" fill="#FFD600" />
    <rect x="2" y="10" width="8" height="4" fill="#FFD600" />
    <rect x="14" y="10" width="8" height="4" fill="#FFD600" />
    <rect x="10" y="14" width="4" height="8" fill="#FFD600" />
    <rect x="6" y="6" width="12" height="12" fill="#FFEB3B" />
  </svg>
);

export default PixelStar; 