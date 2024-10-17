"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <section className="flex min-h-screen flex-col items-center gap-20 bg-secondary p-5 pt-10 sm:p-10 lg:flex-row lg:justify-center lg:p-20">
        <div className="flex flex-col gap-8">
          <h1 className="leading-tighter z-10 max-w-2xl text-5xl font-bold tracking-tighter text-primary-950 sm:text-6xl lg:text-6xl">
            Find out where
            <span className="italic">you can help</span> your community
          </h1>

          <div className="flex max-w-lg flex-row items-center">
            <Input
              placeholder="Search for volunteering opportunities..."
              className="h-11 rounded-r-none border border-r-0 border-primary-950 text-lg tracking-wide text-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Button
              color="primary"
              size="lg"
              className="w-fit rounded-none rounded-r-md border border-primary-950"
            >
              Search
            </Button>
          </div>
        </div>

        <div
          className="h-80 w-80 max-w-xl rounded-lg outline outline-4 outline-offset-2 outline-primary-950 sm:h-96 sm:w-96"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522543558187-768b6df7c25c')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
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
