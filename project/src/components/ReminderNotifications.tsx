import React, { useEffect, useState } from 'react';
import { Bell, X, AlertCircle } from 'lucide-react';
import { Invoice } from '../types/invoice';

interface ReminderNotificationsProps {
  upcomingInvoices: Invoice[];
  overdueInvoices: Invoice[];
}

export const ReminderNotifications: React.FC<ReminderNotificationsProps> = ({
  upcomingInvoices,
  overdueInvoices
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNewReminders, setHasNewReminders] = useState(false);

  useEffect(() => {
    const totalReminders = upcomingInvoices.length + overdueInvoices.length;
    if (totalReminders > 0) {
      setHasNewReminders(true);
    }
  }, [upcomingInvoices.length, overdueInvoices.length]);

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setHasNewReminders(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalReminders = upcomingInvoices.length + overdueInvoices.length;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notification Button */}
      <button
        onClick={handleToggleNotifications}
        className={`relative bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 ${
          hasNewReminders ? 'animate-pulse' : ''
        }`}
      >
        <Bell size={24} />
        {totalReminders > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {totalReminders}
          </div>
        )}
      </button>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-3xl shadow-2xl border-2 border-pink-100 p-6 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-orange-500" size={20} />
              <h3 className="font-bold text-gray-800">Reminders</h3>
            </div>
            <button
              onClick={() => setShowNotifications(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>

          {totalReminders === 0 ? (
            <div className="text-center py-8">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Bell className="text-green-600" size={20} />
              </div>
              <p className="text-gray-600">All caught up! No pending reminders.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Overdue Invoices */}
              {overdueInvoices.length > 0 && (
                <div>
                  <h4 className="text-red-600 font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Overdue ({overdueInvoices.length})
                  </h4>
                  <div className="space-y-2">
                    {overdueInvoices.map(invoice => (
                      <div key={invoice.id} className="bg-red-50 p-3 rounded-2xl border border-red-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm text-red-800">
                              {invoice.companyName}
                            </p>
                            <p className="text-xs text-red-600">
                              Invoice: {invoice.invoiceNumber}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-red-600">
                              Due: {formatDate(invoice.dueDate)}
                            </p>
                            <p className="text-xs font-semibold text-red-800">
                              {Math.abs(getDaysUntilDue(invoice.dueDate))} days overdue
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Invoices */}
              {upcomingInvoices.length > 0 && (
                <div>
                  <h4 className="text-yellow-600 font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Due Soon ({upcomingInvoices.length})
                  </h4>
                  <div className="space-y-2">
                    {upcomingInvoices.map(invoice => (
                      <div key={invoice.id} className="bg-yellow-50 p-3 rounded-2xl border border-yellow-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm text-yellow-800">
                              {invoice.companyName}
                            </p>
                            <p className="text-xs text-yellow-600">
                              Invoice: {invoice.invoiceNumber}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-yellow-600">
                              Due: {formatDate(invoice.dueDate)}
                            </p>
                            <p className="text-xs font-semibold text-yellow-800">
                              {getDaysUntilDue(invoice.dueDate)} days left
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};