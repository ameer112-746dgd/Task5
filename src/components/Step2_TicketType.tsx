'use client';

import { useState } from 'react';
import { useFormState } from './context/FormContext';
import { Button } from './ui/Button';
import { Crown, User, LucideIcon } from 'lucide-react';

type TicketType = 'Business' | 'Economy';

interface OptionCardProps {
  type: TicketType;
  icon: LucideIcon;
}

export default function Step2TicketType() {
  const { nextStep, prevStep, updateFormData, formData } = useFormState();
  const [selectedType, setSelectedType] = useState<TicketType | null>(formData.ticketType || null);

  const handleNext = () => {
    if (selectedType) {
      updateFormData({ ticketType: selectedType });
      nextStep();
    } else {
      alert('Please select a ticket type.');
    }
  };

  const OptionCard = ({ type, icon: Icon }: OptionCardProps) => (
    <div 
      onClick={() => setSelectedType(type)} 
      className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center space-y-3 ${
        selectedType === type 
          ? 'border-[#00BCD4] bg-[#00bcd4]/10' 
          : 'border-gray-600 hover:border-[#00BCD4]'
      }`}
    >
      <Icon className={`w-10 h-10 ${selectedType === type ? 'text-[#00BCD4]' : 'text-gray-400'}`} />
      <span className="font-semibold text-lg">{type}</span>
    </div>
  );

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-8">What type of ticket do you want?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
        <OptionCard type="Business" icon={Crown} />
        <OptionCard type="Economy" icon={User} />
      </div>
      <div className="flex justify-between mt-10">
        <Button variant="secondary" onClick={prevStep}>Before</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}