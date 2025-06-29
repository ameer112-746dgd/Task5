'use client';

import { useState } from 'react';
import { useFormState } from './context/FormContext';
import { Button } from './ui/Button';
import { Home, Globe, HandHeart, Accessibility } from 'lucide-react';

const donationOptions = [
  { name: 'Shelter Foundation', icon: Home, label: 'Foundation' },
  { name: 'Global Outreach', icon: Globe, label: 'Foundation' },
  { name: 'Community Support', icon: HandHeart, label: 'Foundation' },
  { name: 'Accessibility Fund', icon: Accessibility, label: 'Foundation' },
];

export default function Step5Donation() {
  const { prevStep, updateFormData, formData } = useFormState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (donationName: any) => {
    updateFormData({ donation: donationName });
    console.log('FINAL FORM SUBMITTED:', { ...formData, donation: donationName });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 transition-opacity duration-500">
        <h2 className="text-3xl font-bold text-[#00BCD4] mb-4">Thank You!</h2>
        <p className="text-lg">Your flight search has been submitted.</p>
      </div>
    );
  }

  const OptionCard = ({ option, onSelect }: any) => (
    <div onClick={() => onSelect(option.name)} className="bg-[#2a314b] p-6 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center space-y-3 border-2 border-transparent hover:border-[#00BCD4] group">
      <option.icon className="w-10 h-10 text-gray-400 group-hover:text-[#00BCD4] transition-colors" />
      <span className="font-semibold text-lg text-gray-300">{option.label}</span>
    </div>
  );

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-8">Who do you want to help?</h2>
      <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
        {donationOptions.map((option) => (<OptionCard key={option.name} option={option} onSelect={handleSelect} />))}
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="secondary" onClick={prevStep}>Before</Button>
      </div>
    </div>
  );
}