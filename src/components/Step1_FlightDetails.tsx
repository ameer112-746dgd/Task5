'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState } from './context/FormContext';
import { flightDetailsSchema } from './lib/formSchema';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

type FlightDetailsData = z.infer<typeof flightDetailsSchema>;

export default function Step1FlightDetails() {
  const { nextStep, updateFormData, formData } = useFormState();
  const { register, handleSubmit, formState: { errors } } = useForm<FlightDetailsData>({
    resolver: zodResolver(flightDetailsSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: FlightDetailsData) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="From" id="from" {...register('from')} error={errors.from?.message} />
        <Input label="To" id="to" {...register('to')} error={errors.to?.message} />
        <Input label="Depart Date" id="departDate" type="date" {...register('departDate')} error={errors.departDate?.message} />
        <Input label="Return Date" id="returnDate" type="date" {...register('returnDate')} error={errors.returnDate?.message} />
      </div>
      <div className="flex justify-end mt-8">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}