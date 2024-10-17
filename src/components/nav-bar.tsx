"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuth, useClerk } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

import { SearchBar } from "./search-bar";
import { Button } from "./ui/button";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <nav className="xs:flex-row flex flex-col items-center justify-between gap-4 bg-white p-4 shadow-md">
      <div className="flex w-full flex-row items-center justify-between sm:flex-row">
        <div className="flex w-full max-w-lg flex-row items-center gap-10">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-primary"
          >
            VolunteerMe
          </Link>

          {isMobile ? null : (
            <SearchBar
              size="sm"
              placeholder="What are you looking for?"
              variant="muted"
            />
          )}
        </div>

        <div className="flex items-center gap-4 text-sm">
          {!isSignedIn ? (
            <>
              <Link
                href="/sign-in"
                className="hover:underline-offset-3 text-nowrap hover:text-primary-500 hover:underline"
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
      </div>

      {isMobile ? (
        <SearchBar
          size="sm"
          placeholder="What are you looking for?"
          variant="muted"
        />
      ) : null}
    </nav>
  );
};
