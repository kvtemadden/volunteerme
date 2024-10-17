import { Ghost } from "lucide-react";
import React from "react";

export default async function NotFound() {
  return (
    <div className="prose container flex flex-col items-center py-32 text-center">
      <h1>Oops! Page Not Found</h1>
      <p>
        Looks like you&apos;ve stumbled upon a page that doesn&apos;t exist.
      </p>
      <Ghost size={100} />
      <p>The developers are yet to do something ✨ magical ✨ here.</p>
    </div>
  );
}
