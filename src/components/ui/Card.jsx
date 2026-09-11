import React from 'react';
import { cn } from '../../utils/classNames';

export const Card = ({
  children,
  className = '',
  hoverable = true,
  glow = false,
  padding = 'md', // 'none' | 'sm' | 'md' | 'lg'
  onClick,
  ...props
}) => {
  const paddingMap = {
    none: '0',
    sm: '12px',
    md: '20px',
    lg: '28px',
  };

  return (
    <div
      className={cn(
        'glass-card',
        glow ? 'animate-pulse-glow' : '',
        className
      )}
      style={{
        padding: paddingMap[padding] || '20px',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
