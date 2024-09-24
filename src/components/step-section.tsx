import { CircleImgCard } from "./circle-img-card";
import { FadeImgCard } from "./fade-img-card";

interface Step {
  title: string;
  description: string;
  imageUrl?: string;
}

interface StepProps {
  steps: Step[];
  useImgCard?: boolean;
}

export const Steps: React.FC<StepProps> = ({ steps, useImgCard = false }) => {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="mb-6 text-3xl font-black tracking-tight text-secondary-foreground">
        How It Works
      </h2>
      <div className="flex flex-col justify-center space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0">
        {steps.map((step, index) =>
          useImgCard ? (
            <FadeImgCard
              key={index}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl ?? ""}
            />
          ) : (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center rounded-lg bg-secondary p-6 text-secondary-foreground sm:w-1/3"
            >
              <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-secondary-foreground/70">
                {step.description}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
