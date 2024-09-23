import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="mb-4 text-5xl font-bold">Connect with Local Volunteers</h1>
      <p className="mb-6 text-xl">
        Helping non-profits and organizations grow with the power of community.
      </p>
      <Link href="#sign-up">
        <button className="rounded-full bg-white px-6 py-3 font-semibold text-blue-500">
          Get Started
        </button>
      </Link>
    </section>
  );
};
