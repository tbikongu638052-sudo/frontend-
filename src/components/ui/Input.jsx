import React from 'react';
import { cn } from '../../utils/classNames';

export const Input = ({
  icon: Icon,
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  clearable = false,
  onClear,
  ...props
}) => {
  return (
    <div
      className={cn('glass-card', className)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 14px',
        gap: '10px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-glass-card)',
        border: '1px solid var(--border-subtle)',
        transition: 'all var(--transition-fast)',
      }}
    >
      {Icon && <Icon size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '0.875rem',
          width: '100%',
        }}
        {...props}
      />
      {clearable && value && (
        <button
          type="button"
          onClick={onClear}
          style={{
            color: 'var(--text-muted)',
            fontSize: '12px',
            padding: '2px 6px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-elevated)',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};
