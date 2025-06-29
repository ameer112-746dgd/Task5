'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { z } from 'zod';
import { formSchema } from '../lib/formSchema';

type FormDataType = z.infer<typeof formSchema>;

interface FormContextType {
  step: number;
  formData: Partial<FormDataType>;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormDataType>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormDataType>>({});

  const nextStep = () => setStep((prev) => (prev < 5 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const updateFormData = (data: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ step, formData, nextStep, prevStep, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
};