'use client';

import { useFormState } from "./context/FormContext";
import { MapPin, Ticket, SlidersHorizontal, FileText, Heart } from 'lucide-react';

const steps = [
  { icon: MapPin }, { icon: Ticket }, { icon: SlidersHorizontal }, { icon: FileText }, { icon: Heart },
];

export default function ProgressBar() {
  const { step: currentStep } = useFormState();

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div key={index} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive || isCompleted ? 'bg-[#00BCD4] border-[#00BCD4]' : 'border-gray-500'}`}>
              <step.icon className={`w-5 h-5 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
            </div>
            {index < steps.length - 1 && (
              <div className="relative w-16 md:w-24 h-0.5 bg-gray-500">
                <div className="absolute top-0 left-0 h-full bg-[#00BCD4] transition-all duration-500" style={{ width: isCompleted ? '100%' : (isActive ? '50%' : '0%')}}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}