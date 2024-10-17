"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth, useClerk } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

import { SearchBar } from "./search-bar";
import { Button } from "./ui/button";

export const NavBar = () => {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex w-full max-w-lg flex-row items-center gap-10">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-primary"
        >
          VolunteerMe
        </Link>

        <SearchBar
          size="sm"
          placeholder="What are you looking for?"
          variant="muted"
        />
      </div>

      <div className="flex items-center gap-4 text-sm">
        {!isSignedIn ? (
          <>
            <Link
              href="/sign-in"
              className="hover:underline-offset-3 hover:text-primary-500 hover:underline"
            >
              Sign in
            </Link>

            <Button
              variant="go"
              size="sm"
              className="flex flex-row gap-1 hover:no-underline"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/sign-up";
              }}
            >
              Join <ArrowRight size="1.25em" />
            </Button>
          </>
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
