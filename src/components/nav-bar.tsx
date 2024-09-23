import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <Link href="/" className="text-xl font-black">
        VolunteerMe
      </Link>
      <div className="flex items-center gap-0.5 text-sm hover:underline">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
