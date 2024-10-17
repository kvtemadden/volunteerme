import { SearchIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SearchBar = () => {
  return (
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
        <SearchIcon size="1.25em" />
      </Button>
    </div>
  );
};
