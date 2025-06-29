import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <div className="relative">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <input id={id} ref={ref} className={`w-full p-3 bg-gray-700 border-2 rounded-lg text-white focus:outline-none focus:ring-2 transition-colors duration-300 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-[#00BCD4] focus:ring-[#00BCD4]'}`} {...props} />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';