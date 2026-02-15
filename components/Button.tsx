import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  isLoading, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-4 text-base"
  };

  const variants = {
    primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20 hover:bg-indigo-500 border border-indigo-500/50 hover:border-indigo-400 focus:ring-indigo-500",
    secondary: "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-600/50 hover:border-slate-500 focus:ring-slate-500 backdrop-blur-sm",
    danger: "bg-red-900/80 hover:bg-red-800 text-red-100 border border-red-700/50 hover:border-red-500 shadow-lg shadow-red-900/20 focus:ring-red-500",
    ghost: "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-transparent",
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon ? (
        <span className="mr-2.5">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;