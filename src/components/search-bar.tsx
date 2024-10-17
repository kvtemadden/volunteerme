import { cva } from "class-variance-authority";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const searchBarVariants = cva(
  "h-11 rounded-r-none border border-r-0 border-primary-950 tracking-wide text-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        muted: "border-input",
      },
      size: {
        default: "h-11 px-4 text-lg",
        sm: "h-9 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface SearchBarProps {
  variant?: "default" | "muted";
  size?: "default" | "sm";
  placeholder?: string;
}

export const SearchBar = ({
  variant,
  size = "default",
  placeholder = "Search for volunteering opportunities...",
}: SearchBarProps) => {
  return (
    <div className="flex w-full max-w-lg flex-row items-center">
      <Input
        placeholder={placeholder}
        className={searchBarVariants({ variant, size })}
      />

      <Button
        color="primary"
        size={size === "default" ? "lg" : size}
        className={cn(
          "w-fit rounded-none rounded-r-md border border-primary-950",
          { "border-input": variant === "muted" }
        )}
      >
        <SearchIcon size="1.25em" />
      </Button>
    </div>
  );
};
