'use client';

import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn("flex h-full flex-col items-center justify-center")}
    >
      <div className="space-y-6 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg">🔐 Auth</h1>
        <p className="text-white md:text-lg pb-6 px-20">
          A simple auth library based on Next Auth.
        </p>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"} className="text-lg font-medium">
            Log in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}