import React from "react";
import Navbar from "./_components/nav_bar";
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <div>
      {/* Header and Navbar */}
    <header>
      <Navbar />
    </header>
    <main>
      <div>
        <Intro></Intro>
      </div>
    </main>
  </div>
  );
}
