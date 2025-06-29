'use client';

import { useFormState } from './context/FormContext';
import { Button } from './ui/Button';

export default function Step3TicketInfo() {
  const { formData, prevStep, nextStep } = useFormState();

  const ticketData = { price: '21143', miles: '2129', giftMiles: '32.7', date: '27/08/2021' };

  return (
    <div className="text-center">
      <div className="bg-[#2a314b] rounded-lg overflow-hidden shadow-lg">
        <h2 className="text-xl font-semibold p-4 bg-[#1C233D]">Ticket Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 font-semibold text-gray-300">From</th>
                <th className="p-3 font-semibold text-gray-300">To</th>
                <th className="p-3 font-semibold text-gray-300">Type</th>
                <th className="p-3 font-semibold text-gray-300">Date</th>
                <th className="p-3 font-semibold text-gray-300">Price</th>
                <th className="p-3 font-semibold text-gray-300">Miles</th>
                <th className="p-3 font-semibold text-gray-300">Gift Miles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">{formData.from || 'Moskova'}</td>
                <td className="p-3">{formData.to || 'Madrid'}</td>
                <td className="p-3">{formData.ticketType || 'Business'}</td>
                <td className="p-3">{ticketData.date}</td>
                <td className="p-3">{ticketData.price}</td>
                <td className="p-3">{ticketData.miles}</td>
                <td className="p-3">{ticketData.giftMiles}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <Button variant="secondary" onClick={prevStep}>Before</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
}