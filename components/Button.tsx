import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-gold-400 text-white hover:bg-gold-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    outline: "border border-gold-400 text-gold-600 hover:bg-gold-50",
    text: "text-gold-600 hover:text-gold-900 underline-offset-4 hover:underline"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;