import React from "react";
import { Head } from "./head";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function DefaultLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />

      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
