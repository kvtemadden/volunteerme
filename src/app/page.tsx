"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CallToAction } from "../components/call-to-action";
import { Steps } from "../components/step-section";

const Home = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create a profile to get started.",
      imageUrl:
        "https://images.unsplash.com/photo-1608535002897-27b2aa592456?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Browse Opportunities",
      description: "Find volunteering events near you.",
      imageUrl:
        "https://images.unsplash.com/photo-1655337690307-5293f900f580?q=80&w=2441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Make a Difference",
      description: "Sign up and help out!",
      imageUrl:
        "https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <section className="hero flex flex-col gap-6 bg-secondary px-6 py-20 text-center">
        <h1 className="text-primary-950 text-5xl font-black leading-[1.2] tracking-tight">
          Volunteer and{" "}
          <span className="text-primary-500 border-primary-950 border-b-4">
            Make a Difference
          </span>
        </h1>
        <p className="mt-4 text-xl tracking-tight text-secondary-foreground/60">
          Join our platform to connect with volunteering opportunities in your
          community.
        </p>
        <Link href="/sign-up">
          <Button color="primary" size="lg" className="mx-auto w-fit">
            Create an account
          </Button>
        </Link>
      </section>

      <Steps steps={steps} useImgCard />

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
