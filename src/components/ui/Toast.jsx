import React from 'react';
import { useNotification } from '../../hooks/useNotification';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

export const ToastContainer = () => {
  const { notifications, removeNotification } = useNotification();

  if (!notifications.length) return null;

  const icons = {
    success: <CheckCircle2 size={18} color="#10b981" />,
    error: <XCircle size={18} color="#f43f5e" />,
    warning: <AlertTriangle size={18} color="#f59e0b" />,
    info: <Info size={18} color="#6366f1" />,
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '380px',
      }}
    >
      {notifications.map((toast) => (
        <div
          key={toast.id}
          className="glass-panel animate-slide-in"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-muted)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {icons[toast.type] || icons.info}
          <div style={{ flex: 1, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
            {toast.message}
          </div>
          <button
            onClick={() => removeNotification(toast.id)}
            style={{ color: 'var(--text-muted)', padding: '2px', display: 'flex' }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
