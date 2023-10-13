"use client"; // This is a client component 👈🏽
import { useEffect } from "react";

import { useDevs } from "@/hooks/useDevs";
import { DevInput } from "@/components/DevInput";
import { DevCard } from "@/components/DevCard";
import { DevList } from "@/components/DevList";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Provider store={store}>
        <div className="flex flex-col w-full">
          <h1 className="font-mono font-semibold">devfinder</h1>
        </div>
        <div className="flex flex-col w-full items-center justify-between">
          <DevInput />
          <DevCard />
          <DevList />
        </div>
      </Provider>
    </main>
  );
}
