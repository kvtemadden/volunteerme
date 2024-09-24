import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center pt-6 sm:-mt-14 sm:min-h-screen">
      <div className="flex h-[485px] w-[390px] justify-center overflow-hidden rounded border bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-900">
        <div className="w-fit">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-primary hover:bg-primary-600 !shadow-none",
                formButtonPrimaryText: "text-white",
                formButtonSecondary: "bg-primary hover:bg-primary-600",
                formButtonSecondaryText: "text-white",
                footerActionLink: "text-primary-500 hover:text-primary-600",
                rootBox: "bg-white dark:bg-neutral-900",
                card: "bg-white dark:bg-neutral-900",
                headerTitle: "dark:text-white",
                headerSubtitle: "dark:text-white",
                socialButtonsBlockButtonText: "dark:text-white",
                socialButtonsBlockButton: "dark:border-neutral-700",
                socialButtonsBlockButtonArrow: "dark:text-white",
                dividerText: "dark:text-white",
                dividerLine: "dark:bg-white",
                formFieldLabel: "dark:text-white",
                formFieldInput:
                  "dark:bg-neutral-800 dark:border-neutral-700 dark:text-white",
                footerActionText: "dark:text-white",
              },
            }}
            signInUrl="/sign-in"
            afterSignUpUrl="/organisation/create"
          />
        </div>
      </div>
    </div>
  );
}
