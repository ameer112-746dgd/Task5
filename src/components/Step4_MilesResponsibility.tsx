'use client';

import { useFormState } from './context/FormContext';
import { Button } from './ui/Button';
import Image from 'next/image';
import vintagePlaneImage from '@/assets/vintage-plane.png'; 

export default function Step4MilesResponsibility() {
  const { prevStep, nextStep } = useFormState();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-8">Miles Responsibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative bg-gray-800 p-4 rounded-lg text-center">
           <p className="mt-4 font-mono text-sm text-gray-300">May the miles be with you.</p>
            <Image 
              src={vintagePlaneImage}
              alt="Vintage airplane over a map" 
              className="mx-auto rounded"
              placeholder="blur"
            />
        </div>
        <div className="text-gray-300 text-sm leading-relaxed">
           <p>Throughout the history, globalization and technological developments have always had a great effect on transportation. Today, everybody transports above the clouds and under the seas in more different ways and durations, compared to past. While airplanes are an extreme transportation vehicle for most of us only a quarter century ago, many people use it in their daily routines in today. Airlines organize many campaigns like elastic schedules, promotion gifts and discounts to maintain this increase in number of people who fly regularly and cities. Bonus miles is only one of them. Airlines offer bonus miles to the passenger in accordance with the length and frequency of their flights. However, most of those miles go waste without growing enough to get a small gift like teddy bear, let alone a free bonus ticket.</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <Button variant="secondary" onClick={prevStep}>Before</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
}