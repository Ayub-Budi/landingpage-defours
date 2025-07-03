"use client";

import React from "react";

export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-4 py-8">
        {children}
      </div>
    </>
  );
}
