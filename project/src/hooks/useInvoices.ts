import { useState, useEffect } from 'react';
import { Invoice, InvoiceFormData } from '../types/invoice';

const STORAGE_KEY = 'invoice-manager-data';

export function useInvoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const savedInvoices = localStorage.getItem(STORAGE_KEY);
    if (savedInvoices) {
      setInvoices(JSON.parse(savedInvoices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
  }, [invoices]);

  const addInvoice = (formData: InvoiceFormData) => {
    const newInvoice: Invoice = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setInvoices(prev => [newInvoice, ...prev]);
  };

  const updateInvoiceStatus = (id: string, status: Invoice['status']) => {
    setInvoices(prev => 
      prev.map(invoice => 
        invoice.id === id ? { ...invoice, status } : invoice
      )
    );
  };

  const deleteInvoice = (id: string) => {
    setInvoices(prev => prev.filter(invoice => invoice.id !== id));
  };

  const getInvoicesByStatus = (status: Invoice['status']) => {
    return invoices.filter(invoice => invoice.status === status);
  };

  const getUpcomingInvoices = (days: number = 7) => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    
    return invoices.filter(invoice => {
      const dueDate = new Date(invoice.dueDate);
      return dueDate >= now && dueDate <= futureDate && invoice.status === 'pending';
    });
  };

  const getOverdueInvoices = () => {
    const now = new Date();
    return invoices.filter(invoice => {
      const dueDate = new Date(invoice.dueDate);
      return dueDate < now && invoice.status === 'pending';
    });
  };

  return {
    invoices,
    addInvoice,
    updateInvoiceStatus,
    deleteInvoice,
    getInvoicesByStatus,
    getUpcomingInvoices,
    getOverdueInvoices
  };
}