"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* new chat */}
        <NewChat />

        <div className="">{/* model selection */}</div>

        {/* map through the chatrows */}
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2
                     hover:opacity-50"
        />
      )}
    </div>
  );
}
