"use client";

import dayNightAnimation from "@/public/lottie/day-night.json";
import { LottieRefCurrentProps } from "lottie-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const DemoLottie = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const timeSegments = {
    morning: [0, 10],
    afternoon: [11, 23],
    evening: [25, 30],
    night: [31, 42],
  };

  const handleTimeChange = (time: keyof typeof timeSegments) => {
    const [startFrame, endFrame] = timeSegments[time];

    // Smoothly play the segment instead of jumping
    lottieRef.current?.playSegments([startFrame, endFrame], true);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex gap-[8px]">
        <button type="button" onClick={() => handleTimeChange("morning")}>
          Morning
        </button>
        <button type="button" onClick={() => handleTimeChange("afternoon")}>
          Afternoon
        </button>
        <button type="button" onClick={() => handleTimeChange("evening")}>
          Evening
        </button>
        <button type="button" onClick={() => handleTimeChange("night")}>
          Night
        </button>
      </div>
      <div>
        <Lottie
          className="w-[200px] md:w-[340px]"
          animationData={dayNightAnimation}
          loop={false}
          autoplay={false}
          lottieRef={lottieRef}
        />
      </div>
    </div>
  );
};

export default DemoLottie;
