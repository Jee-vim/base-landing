"use client";
import { useEffect } from "react";

export default function Loading({ isBg = false }: { isBg?: boolean }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div
      style={{ zIndex: 999999999 }}
      className={`fixed inset-0 size-full flex items-center justify-center ${isBg && "bg-[#000]/20"} `}
    >
      <div className="loader" />
    </div>
  );
}
