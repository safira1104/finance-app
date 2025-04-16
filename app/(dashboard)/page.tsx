"use client"

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen} = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen} className="mt-4">
        Add an account
      </Button>
    </div>
  )
};
