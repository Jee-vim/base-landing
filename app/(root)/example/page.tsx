"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

import { Suspense } from "react";
import DynamicList from "@/components/shared/dynamic-list";
import DemoCarousel from "@/components/module/example/demo-carousel";
import Pagination from "@/components/shared/pagination";
import DemoInput from "@/components/module/example/demo-input";
import DemoDropdown from "@/components/module/example/demo-dropdown";
import DemoLottie from "@/components/module/example/demo-lottie";

export default function Page() {
  const { setOpenDialog } = store();

  const handleConfirmation = () => {
    setOpenDialog({
      id: "CONFRIMATION",
      width: "w-[300px]",
      height: "h-auto md:h-[200px]",
      headerTitle: "Confirmation",
      data: {
        onConfirmation: () => console.log("confirm"),
        text: "Are you sure?",
      },
    });
  };

  return (
    <div className="p-2 container mx-auto w-full grid gap-10">
      <CButton
        title="Confirmation"
        onClick={handleConfirmation}
        variant="secondary"
      />
      <DynamicList
        isLoading={false}
        item={["Item 1", "Item 2", "Item 3"]}
        render={(item) => <div key={item}>{item}</div>}
      />
      <DemoCarousel />
      <Suspense>
        <Pagination totalPages={20} />
      </Suspense>
      <DemoInput />
      <DemoDropdown />
      <DemoLottie />
    </div>
  );
}
