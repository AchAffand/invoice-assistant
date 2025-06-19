import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { InvoiceForm } from './components/InvoiceForm';
import { InvoiceList } from './components/InvoiceList';
import { ReminderNotifications } from './components/ReminderNotifications';
import { useInvoices } from './hooks/useInvoices';
import PixelCloud from './components/PixelCloud';
import PixelStar from './components/PixelStar';
import PixelHeart from './components/PixelHeart';
import PixelMascot from './components/PixelMascot';

function App() {
  const {
    invoices,
    addInvoice,
    updateInvoiceStatus,
    deleteInvoice,
    getUpcomingInvoices,
    getOverdueInvoices
  } = useInvoices();

  const upcomingInvoices = getUpcomingInvoices(7);
  const overdueInvoices = getOverdueInvoices();

  // Update overdue invoices status
  useEffect(() => {
    overdueInvoices.forEach(invoice => {
      if (invoice.status === 'pending') {
        updateInvoiceStatus(invoice.id, 'overdue');
      }
    });
  }, [overdueInvoices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-x-hidden">
      {/* Pixel grid background dan dekorasi pixel tetap */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Pixel grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        {/* Pixel decorations */}
        <PixelCloud size={64} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 40, left: 30, opacity: 0.7, zIndex: 1 }} />
        <PixelCloud size={48} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', top: 120, right: 60, opacity: 0.6, zIndex: 1 }} />
        <PixelCloud size={40} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', bottom: 80, left: 80, opacity: 0.5, zIndex: 1 }} />
        <PixelCloud size={36} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 300, left: 200, opacity: 0.6, zIndex: 1 }} />
        <PixelCloud size={32} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', bottom: 200, right: 120, opacity: 0.5, zIndex: 1 }} />
        <PixelStar size={24} style={{ position: 'absolute', top: 100, left: 200, zIndex: 1, opacity: 0.8 }} />
        <PixelStar size={18} style={{ position: 'absolute', top: 200, right: 120, zIndex: 1, opacity: 0.7 }} />
        <PixelStar size={20} style={{ position: 'absolute', bottom: 120, left: 160, zIndex: 1, opacity: 0.7 }} />
        <PixelStar size={16} style={{ position: 'absolute', bottom: 60, right: 80, zIndex: 1, opacity: 0.6 }} />
        <PixelStar size={22} style={{ position: 'absolute', top: 400, left: 80, zIndex: 1, opacity: 0.7 }} />
        <PixelStar size={14} style={{ position: 'absolute', top: 500, right: 200, zIndex: 1, opacity: 0.5 }} />
        <PixelStar size={18} style={{ position: 'absolute', bottom: 300, right: 60, zIndex: 1, opacity: 0.6 }} />
        <PixelHeart size={28} style={{ position: 'absolute', top: 180, left: 60, zIndex: 1, opacity: 0.8 }} />
        <PixelHeart size={20} style={{ position: 'absolute', bottom: 100, right: 40, zIndex: 1, opacity: 0.7 }} />
        <PixelHeart size={16} style={{ position: 'absolute', top: 60, right: 200, zIndex: 1, opacity: 0.6 }} />
        <PixelHeart size={24} style={{ position: 'absolute', top: 350, right: 100, zIndex: 1, opacity: 0.7 }} />
        <PixelHeart size={18} style={{ position: 'absolute', bottom: 250, left: 120, zIndex: 1, opacity: 0.6 }} />
        <PixelHeart size={14} style={{ position: 'absolute', bottom: 400, right: 300, zIndex: 1, opacity: 0.5 }} />
        {/* Maskot di pojok kiri bawah */}
        <PixelMascot size={96} style={{ position: 'absolute', left: 16, bottom: 16, zIndex: 2 }} />
      </div>
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-20 relative z-10">
          <InvoiceForm onSubmit={addInvoice} />
          <InvoiceList
            invoices={invoices}
            onStatusChange={updateInvoiceStatus}
            onDelete={deleteInvoice}
            upcomingCount={upcomingInvoices.length}
            overdueCount={overdueInvoices.length}
          />
        </main>
        <ReminderNotifications
          upcomingInvoices={upcomingInvoices}
          overdueInvoices={overdueInvoices}
        />
      </div>
    </div>
  );
}

export default App;