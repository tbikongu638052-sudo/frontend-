import React from 'react';
import { cn } from '../../utils/classNames';

export const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'neutral'
  size = 'md', // 'sm' | 'md'
  className = '',
}) => {
  const colorStyles = {
    primary: { bg: 'rgba(99, 102, 241, 0.15)', text: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
    cyan: { bg: 'rgba(6, 182, 212, 0.15)', text: '#22d3ee', border: 'rgba(6, 182, 212, 0.3)' },
    purple: { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)' },
    emerald: { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399', border: 'rgba(16, 185, 129, 0.3)' },
    amber: { bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)' },
    rose: { bg: 'rgba(244, 63, 94, 0.15)', text: '#fb7185', border: 'rgba(244, 63, 94, 0.3)' },
    neutral: { bg: 'rgba(148, 163, 184, 0.15)', text: '#cbd5e1', border: 'rgba(148, 163, 184, 0.3)' },
  };

  const current = colorStyles[variant] || colorStyles.primary;

  return (
    <span
      className={cn('inline-flex items-center font-medium rounded-full', className)}
      style={{
        backgroundColor: current.bg,
        color: current.text,
        border: `1px solid ${current.border}`,
        padding: size === 'sm' ? '2px 8px' : '4px 10px',
        fontSize: size === 'sm' ? '0.7rem' : '0.75rem',
        borderRadius: 'var(--radius-full)',
        letterSpacing: '0.02em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
};
