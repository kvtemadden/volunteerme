interface Step {
  title: string;
  description: string;
}

interface StepProps {
  steps: Step[];
}

export const Steps: React.FC<StepProps> = ({ steps }) => {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="mb-6 text-3xl font-bold">How It Works</h2>
      <div className="flex flex-col justify-center space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-full rounded-lg bg-gray-100 p-6 sm:w-1/3"
          >
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
