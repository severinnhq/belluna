import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}
export default function Button({ size = 'md', className = '', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-6',
    lg: 'text-lg py-3 px-8',
  };
  return (
    <button
      className={`inline-block bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}