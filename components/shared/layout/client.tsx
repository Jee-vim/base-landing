"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store";
import CoreDialog from "../dialog/core";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Loading from "../loading";

export default function Client({ children }: { children: React.ReactNode }) {
  const { loading, clearLoading, closeDialog, closeDrawer } = useAuthStore();
  const path = usePathname();

  useEffect(() => {
    if (path) {
      clearLoading();
      closeDialog();
      closeDrawer();
    }
  }, [path]);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading isBg />}
      <CoreDialog />
      <ProgressBar
        height="4px"
        color="var(--primary)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
