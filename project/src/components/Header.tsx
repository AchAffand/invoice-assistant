import React from 'react';
import { FileText, Heart } from 'lucide-react';
import PixelCloud from './PixelCloud';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-8 px-4 mb-8 overflow-hidden">
      {/* Awan pixel art */}
      <PixelCloud size={56} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 10, left: 20, opacity: 0.8, zIndex: 1 }} />
      <PixelCloud size={40} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', top: 50, left: 120, opacity: 0.7, zIndex: 1 }} />
      <PixelCloud size={48} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 30, right: 40, opacity: 0.85, zIndex: 1 }} />
      <PixelCloud size={36} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', top: 80, right: 100, opacity: 0.6, zIndex: 1 }} />
      <PixelCloud size={32} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 90, left: 60, opacity: 0.5, zIndex: 1 }} />
      {/* Konten utama header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl font-bold">Invoice Assistant</h1>
          <Heart className="text-pink-200" size={24} />
        </div>
        <p className="text-center text-pink-100 text-lg">
          Smart assistant to help you manage your invoices with style and never miss a deadline! 💕
        </p>
      </div>
    </header>
  );
};