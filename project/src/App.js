"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Header_1 = require("./components/Header");
const InvoiceForm_1 = require("./components/InvoiceForm");
const InvoiceList_1 = require("./components/InvoiceList");
const ReminderNotifications_1 = require("./components/ReminderNotifications");
const useInvoices_1 = require("./hooks/useInvoices");
const PixelCloud_1 = __importDefault(require("./components/PixelCloud"));
const PixelStar_1 = __importDefault(require("./components/PixelStar"));
const PixelHeart_1 = __importDefault(require("./components/PixelHeart"));
const PixelMascot_1 = __importDefault(require("./components/PixelMascot"));
function App() {
    const { invoices, addInvoice, updateInvoiceStatus, deleteInvoice, getUpcomingInvoices, getOverdueInvoices } = (0, useInvoices_1.useInvoices)();
    const upcomingInvoices = getUpcomingInvoices(7);
    const overdueInvoices = getOverdueInvoices();
    // Update overdue invoices status
    (0, react_1.useEffect)(() => {
        overdueInvoices.forEach(invoice => {
            if (invoice.status === 'pending') {
                updateInvoiceStatus(invoice.id, 'overdue');
            }
        });
    }, [overdueInvoices]);
    return (<div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-x-hidden">
      {/* Pixel grid background dan dekorasi pixel tetap */}
      <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
        }}>
        {/* Pixel grid */}
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
        }}/>
        {/* Pixel decorations */}
        <PixelCloud_1.default size={64} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 40, left: 30, opacity: 0.7, zIndex: 1 }}/>
        <PixelCloud_1.default size={48} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', top: 120, right: 60, opacity: 0.6, zIndex: 1 }}/>
        <PixelCloud_1.default size={40} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', bottom: 80, left: 80, opacity: 0.5, zIndex: 1 }}/>
        <PixelCloud_1.default size={36} color1="#fff" color2="#f9a8d4" style={{ position: 'absolute', top: 300, left: 200, opacity: 0.6, zIndex: 1 }}/>
        <PixelCloud_1.default size={32} color1="#f9a8d4" color2="#fff" style={{ position: 'absolute', bottom: 200, right: 120, opacity: 0.5, zIndex: 1 }}/>
        <PixelStar_1.default size={24} style={{ position: 'absolute', top: 100, left: 200, zIndex: 1, opacity: 0.8 }}/>
        <PixelStar_1.default size={18} style={{ position: 'absolute', top: 200, right: 120, zIndex: 1, opacity: 0.7 }}/>
        <PixelStar_1.default size={20} style={{ position: 'absolute', bottom: 120, left: 160, zIndex: 1, opacity: 0.7 }}/>
        <PixelStar_1.default size={16} style={{ position: 'absolute', bottom: 60, right: 80, zIndex: 1, opacity: 0.6 }}/>
        <PixelStar_1.default size={22} style={{ position: 'absolute', top: 400, left: 80, zIndex: 1, opacity: 0.7 }}/>
        <PixelStar_1.default size={14} style={{ position: 'absolute', top: 500, right: 200, zIndex: 1, opacity: 0.5 }}/>
        <PixelStar_1.default size={18} style={{ position: 'absolute', bottom: 300, right: 60, zIndex: 1, opacity: 0.6 }}/>
        <PixelHeart_1.default size={28} style={{ position: 'absolute', top: 180, left: 60, zIndex: 1, opacity: 0.8 }}/>
        <PixelHeart_1.default size={20} style={{ position: 'absolute', bottom: 100, right: 40, zIndex: 1, opacity: 0.7 }}/>
        <PixelHeart_1.default size={16} style={{ position: 'absolute', top: 60, right: 200, zIndex: 1, opacity: 0.6 }}/>
        <PixelHeart_1.default size={24} style={{ position: 'absolute', top: 350, right: 100, zIndex: 1, opacity: 0.7 }}/>
        <PixelHeart_1.default size={18} style={{ position: 'absolute', bottom: 250, left: 120, zIndex: 1, opacity: 0.6 }}/>
        <PixelHeart_1.default size={14} style={{ position: 'absolute', bottom: 400, right: 300, zIndex: 1, opacity: 0.5 }}/>
        {/* Maskot di pojok kiri bawah */}
        <PixelMascot_1.default size={96} style={{ position: 'absolute', left: 16, bottom: 16, zIndex: 2 }}/>
      </div>
      {/* Main content */}
      <div className="relative z-10">
        <Header_1.Header />
        <main className="max-w-6xl mx-auto px-4 pb-20 relative z-10">
          <InvoiceForm_1.InvoiceForm onSubmit={addInvoice}/>
          <InvoiceList_1.InvoiceList invoices={invoices} onStatusChange={updateInvoiceStatus} onDelete={deleteInvoice} upcomingCount={upcomingInvoices.length} overdueCount={overdueInvoices.length}/>
        </main>
        <ReminderNotifications_1.ReminderNotifications upcomingInvoices={upcomingInvoices} overdueInvoices={overdueInvoices}/>
      </div>
    </div>);
}
exports.default = App;
