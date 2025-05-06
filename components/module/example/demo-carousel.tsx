"use client";
import CCarousel from "@/components/shared/custome/c-carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DemoCarousel() {
  const [current, setCurrent] = useState(0);
  return (
    <CCarousel
      arrowPosition="inside-right"
      showDots
      current={current}
      setCurrent={setCurrent}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-20">
          <div
            className={cn("p-5 bg-red-600", {
              "bg-neutral-400!": index == current,
            })}
          >
            <span className="text-3xl font-semibold">{index + 1}</span>
          </div>
        </CarouselItem>
      ))}
    </CCarousel>
  );
}
