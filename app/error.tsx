"use client";
import { useEffect } from "react";

// special-routed NextJS Error Handling Page
export default function Error404({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <div>404 Error</div>;
}
