'use client';

import { FormProvider, useFormState } from './context/FormContext';
import ProgressBar from './ProgressBar';
import Step1FlightDetails from './Step1_FlightDetails';
import Step2TicketType from './Step2_TicketType';
import Step3TicketInfo from './Step3_TicketInfo';
import Step4MilesResponsibility from './Step4_MilesResponsibility';
import Step5Donation from './Step5_Donation';

const FormStepperContent = () => {
  const { step } = useFormState();

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1FlightDetails />;
      case 2: return <Step2TicketType />;
      case 3: return <Step3TicketInfo />;
      case 4: return <Step4MilesResponsibility />;
      case 5: return <Step5Donation />;
      default: return <Step1FlightDetails />;
    }
  };

  return (
    <div className="bg-[#1C233D] p-6 md:p-8 rounded-lg shadow-2xl">
      <ProgressBar />
      <div className="mt-8">{renderStep()}</div>
    </div>
  );
};

export default function FormStepper() {
  return (
    <FormProvider>
      <FormStepperContent />
    </FormProvider>
  );
}