import React from 'react';
import { Calendar, Building2, FileText, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { Invoice } from '../types/invoice';

interface InvoiceCardProps {
  invoice: Invoice;
  onStatusChange: (id: string, status: Invoice['status']) => void;
  onDelete: (id: string) => void;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  invoice,
  onStatusChange,
  onDelete
}) => {
  const getDaysUntilDue = () => {
    const dueDate = new Date(invoice.dueDate);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilDue = getDaysUntilDue();
  const isOverdue = daysUntilDue < 0;
  const isDueSoon = daysUntilDue <= 7 && daysUntilDue >= 0;

  const getStatusColor = () => {
    if (invoice.status === 'paid') return 'bg-green-100 text-green-800 border-green-200';
    if (isOverdue) return 'bg-red-100 text-red-800 border-red-200';
    if (isDueSoon) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getStatusText = () => {
    if (invoice.status === 'paid') return 'Lunas';
    if (isOverdue) return `Terlambat (${Math.abs(daysUntilDue)} hari)`;
    if (isDueSoon) return `Jatuh tempo dalam ${daysUntilDue} hari`;
    return `Jatuh tempo dalam ${daysUntilDue} hari`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white rounded-3xl shadow-lg p-6 border-2 transition-all duration-200 hover:shadow-xl hover:scale-105 ${
      isOverdue ? 'border-red-200 bg-red-50' : 
      isDueSoon ? 'border-yellow-200 bg-yellow-50' : 
      'border-pink-100'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-2 rounded-full">
            <Building2 className="text-white" size={18} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              {invoice.companyName}
            </h3>
            <p className="text-sm text-gray-500">
              Ditambahkan {formatDate(invoice.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {invoice.status === 'pending' && (
            <button
              onClick={() => onStatusChange(invoice.id, 'paid')}
              className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors duration-200"
              title="Tandai sebagai lunas"
            >
              <CheckCircle size={16} />
            </button>
          )}
          <button
            onClick={() => onDelete(invoice.id)}
            className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200"
            title="Hapus invoice"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="text-gray-400" size={16} />
          <span className="text-sm text-gray-600">
            Invoice: <span className="font-semibold">{invoice.invoiceNumber}</span>
          </span>
        </div>

        {invoice.poNumber && (
          <div className="flex items-center gap-2">
            <FileText className="text-gray-400" size={16} />
            <span className="text-sm text-gray-600">
              PO: <span className="font-semibold">{invoice.poNumber}</span>
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Calendar className="text-gray-400" size={16} />
          <span className="text-sm text-gray-600">
            Jatuh Tempo: <span className="font-semibold">{formatDate(invoice.dueDate)}</span>
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor()}`}>
          {getStatusText()}
        </div>
        {(isOverdue || isDueSoon) && invoice.status === 'pending' && (
          <div className="flex items-center gap-1 text-orange-600">
            <AlertCircle size={16} />
            <span className="text-xs font-semibold">Pengingat!</span>
          </div>
        )}
      </div>
    </div>
  );
};