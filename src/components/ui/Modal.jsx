import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '750px',
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel animate-fade-scale"
        style={{
          width: '100%',
          maxWidth,
          maxHeight: '88vh',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-muted)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {title}
            </h3>
            {subtitle && (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              color: 'var(--text-muted)',
              padding: '6px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast)',
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto',
            flex: 1,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
