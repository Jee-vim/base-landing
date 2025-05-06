import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const dotVariants = cva(
  "absolute py-2 text-center text-sm text-muted-foreground",
  {
    variants: {
      position: {
        outside: "",
        inside: "bottom-10",
      },
      align: {
        start: "left-0",
        center: "left-1/2 -translate-x-1/2",
        end: "right-0",
      },
    },
  },
);

export default function CCarousel({
  arrowPosition = "inside",
  showArrow = true,
  showDots = false,
  dotPosition = "outside",
  dotAlign = "center",
  children,
  current = 0,
  setCurrent = () => {},
}: CCarousel) {
  const isOutBottom = arrowPosition === "outside-bottom";
  const isOutTop = arrowPosition === "outside-top";
  const isInside = arrowPosition === "inside";
  const isInsideRight = arrowPosition === "inside-right";
  const isInsideLeft = arrowPosition === "inside-left";

  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent && setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent && setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className={cn("w-full", {
        "pt-10": isOutTop && showArrow,
        "pb-10": isOutBottom && showArrow,
      })}
    >
      <CarouselContent>{children}</CarouselContent>
      {showDots && (
        <div
          className={dotVariants({
            position: dotPosition,
            align: dotAlign,
          })}
        >
          Slide {current} of {count}
        </div>
      )}

      {showArrow && (
        <>
          <CarouselPrevious
            className={cn({
              "bottom-0 right-12": isOutBottom,
              "top-0 right-12": isOutTop,
              "left-0 top-1/2 -translate-y-1/2": isInside,
              "left-2 bottom-3": isInsideLeft,
              "right-12 bottom-3": isInsideRight,
            })}
          />
          <CarouselNext
            className={cn({
              "bottom-0 right-0": isOutBottom,
              "top-0 right-0 ": isOutTop,
              "right-0 top-1/2 -translate-y-1/2": isInside,
              "left-12 bottom-3": isInsideLeft,
              "right-2 bottom-3": isInsideRight,
            })}
          />
        </>
      )}
    </Carousel>
  );
}
