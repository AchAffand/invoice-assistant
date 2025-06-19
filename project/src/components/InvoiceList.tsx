import React, { useState } from 'react';
import { Search, Filter, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Invoice } from '../types/invoice';
import { InvoiceCard } from './InvoiceCard';

interface InvoiceListProps {
  invoices: Invoice[];
  onStatusChange: (id: string, status: Invoice['status']) => void;
  onDelete: (id: string) => void;
  upcomingCount: number;
  overdueCount: number;
}

export const InvoiceList: React.FC<InvoiceListProps> = ({
  invoices,
  onStatusChange,
  onDelete,
  upcomingCount,
  overdueCount
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'paid' | 'overdue'>('all');

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.poNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === 'all' || 
      (filterStatus === 'overdue' && new Date(invoice.dueDate) < new Date() && invoice.status === 'pending') ||
      (filterStatus !== 'overdue' && invoice.status === filterStatus);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3">
            <FileText size={24} />
            <div>
              <p className="text-sm font-medium opacity-90">Total Invoice</p>
              <p className="text-2xl font-bold">{invoices.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} />
            <div>
              <p className="text-sm font-medium opacity-90">Segera Jatuh Tempo</p>
              <p className="text-2xl font-bold">{upcomingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} />
            <div>
              <p className="text-sm font-medium opacity-90">Terlambat</p>
              <p className="text-2xl font-bold">{overdueCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-pink-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari invoice..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="pl-10 pr-8 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200 bg-white"
            >
              <option value="all">Semua Invoice</option>
              <option value="pending">Belum Lunas</option>
              <option value="paid">Lunas</option>
              <option value="overdue">Terlambat</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoice Grid */}
      {filteredInvoices.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center border-2 border-pink-100">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FileText className="text-white" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada invoice ditemukan</h3>
          <p className="text-gray-600">
            {searchTerm || filterStatus !== 'all' 
              ? 'Coba ubah kata kunci pencarian atau filter.'
              : 'Tambahkan invoice pertama Anda untuk memulai!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvoices.map(invoice => (
            <InvoiceCard
              key={invoice.id}
              invoice={invoice}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};