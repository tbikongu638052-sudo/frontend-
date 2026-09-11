import React from 'react';
import { cn } from '../../utils/classNames';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all select-none rounded-lg cursor-pointer";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md hover:shadow-indigo-500/25 active:scale-[0.98]",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/60 active:scale-[0.98]",
    outline: "bg-transparent text-slate-200 border border-slate-700 hover:bg-slate-800/80 hover:border-slate-600 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800/60 hover:text-white",
    danger: "bg-rose-600 text-white hover:bg-rose-500 shadow-md hover:shadow-rose-500/25 active:scale-[0.98]",
    gradient: "gradient-accent text-white shadow-lg hover:opacity-90 active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant] || variantStyles.primary,
        sizeStyles[size] || sizeStyles.md,
        disabled || loading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      style={{
        padding: size === 'sm' ? '6px 12px' : size === 'lg' ? '12px 22px' : '8px 16px',
        borderRadius: 'var(--radius-md)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: '600',
        fontSize: size === 'sm' ? '0.8rem' : size === 'lg' ? '1rem' : '0.875rem',
        transition: 'all var(--transition-fast)',
        border: variant === 'outline' ? '1px solid var(--border-muted)' : variant === 'secondary' ? '1px solid var(--border-subtle)' : 'none',
        background: variant === 'primary' ? 'var(--primary)' : variant === 'gradient' ? 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)' : variant === 'secondary' ? 'var(--bg-elevated)' : variant === 'danger' ? 'var(--accent-rose)' : variant === 'outline' ? 'transparent' : 'transparent',
        color: variant === 'ghost' || variant === 'outline' ? 'var(--text-primary)' : '#ffffff',
        boxShadow: variant === 'primary' || variant === 'gradient' ? 'var(--shadow-glow)' : 'none',
      }}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="animate-spin-slow" style={{ display: 'inline-block' }}>⟳</span>
      ) : (
        Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </button>
  );
};
