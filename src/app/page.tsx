import FormStepper from '@/components/FormStepper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 text-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Search Flights, Cheapest Flights
        </h1>
        <p className="text-center text-gray-300 mt-2 mb-8">
          All the plane tickets you are looking for together
        </p>
        <FormStepper />
      </div>
    </main>
  );
}