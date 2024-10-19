'use client';
import React, { useState } from "react";
import '../globals.css';
import Sidebar from "@/components/Sidebar/Sidebar";


export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h1>This Feature is Still in Progress</h1>
      </div>
    </div>
  );
}

