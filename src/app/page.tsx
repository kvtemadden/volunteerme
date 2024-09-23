"use client";

import { CallToAction } from "../components/call-to-action";
import { Steps } from "../components/step-section";

const Home = () => {
  const steps = [
    { title: "Sign Up", description: "Create a profile to get started." },
    {
      title: "Browse Opportunities",
      description: "Find volunteering events near you.",
    },
    { title: "Make a Difference", description: "Sign up and help out!" },
  ];

  return (
    <div>
      <section className="hero bg-gray-50 py-20 text-center">
        <h1 className="text-5xl font-bold">Volunteer and Make a Difference</h1>
        <p className="mt-4 text-lg text-gray-600">
          Join our platform to connect with volunteering opportunities in your
          community.
        </p>
      </section>

      <Steps steps={steps} />

      <CallToAction
        title="Ready to Get Started?"
        description="Sign up today to begin volunteering in your area!"
        buttonText="Sign Up"
        onButtonClick={() => console.log("Sign Up clicked")}
      />
    </div>
  );
};

export default Home;
