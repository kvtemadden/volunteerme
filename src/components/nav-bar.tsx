"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth, useClerk } from "@clerk/nextjs";

export const NavBar = () => {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <Link href="/" className="text-xl font-black tracking-tight text-primary">
        VolunteerMe
      </Link>
      <div className="flex items-center gap-0.5 text-sm hover:underline">
        {!isSignedIn ? (
          <Link
            href="/sign-in"
            className="hover:underline-offset-3 hover:text-primary-500 hover:underline"
          >
            Sign in
          </Link>
        ) : (
          <button
            onClick={() => signOut(() => router.push("/"))}
            className="hover:underline-offset-3 hover:text-primary-500 hover:underline"
          >
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};
