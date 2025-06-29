import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseClasses = "px-6 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1C233D]";
    const variantClasses = {
      primary: "bg-[#00BCD4] text-white hover:bg-[#00A7B9] focus:ring-[#00BCD4]",
      secondary: "bg-transparent border border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-gray-400",
    };

    return (
      <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';