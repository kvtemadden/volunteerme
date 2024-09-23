"use client";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-blue-600 px-6 py-12 text-center text-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{description}</p>
      <button
        onClick={onButtonClick}
        className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-200"
      >
        {buttonText}
      </button>
    </section>
  );
};
