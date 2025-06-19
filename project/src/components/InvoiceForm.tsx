import React, { useState } from 'react';
import { Plus, Building2 } from 'lucide-react';
import { InvoiceFormData } from '../types/invoice';

interface InvoiceFormProps {
  onSubmit: (data: InvoiceFormData) => void;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<InvoiceFormData>({
    companyName: '',
    invoiceNumber: '',
    poNumber: '',
    dueDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.invoiceNumber && formData.dueDate) {
      onSubmit(formData);
      setFormData({
        companyName: '',
        invoiceNumber: '',
        poNumber: '',
        dueDate: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-2 border-pink-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-full">
          <Building2 className="text-white" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Tambah Invoice Baru</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Perusahaan *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200"
              placeholder="Masukkan nama perusahaan"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nomor Invoice *
            </label>
            <input
              type="text"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200"
              placeholder="Masukkan nomor invoice"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nomor PO
            </label>
            <input
              type="text"
              name="poNumber"
              value={formData.poNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200"
              placeholder="Masukkan nomor PO"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tanggal Jatuh Tempo *
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors duration-200"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Tambah Invoice
        </button>
      </form>
    </div>
  );
};