export interface Invoice {
  id: string;
  companyName: string;
  invoiceNumber: string;
  poNumber: string;
  dueDate: string;
  createdAt: string;
  status: 'pending' | 'overdue' | 'paid';
}

export interface InvoiceFormData {
  companyName: string;
  invoiceNumber: string;
  poNumber: string;
  dueDate: string;
}