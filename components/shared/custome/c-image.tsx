"use client";
import { Default } from "@/lib/image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const CImage = ({
  src,
  alt,
  width = 100,
  height = 100,
  className,
  style,
  fill,
  rounded,
}: CImage) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const source = !isError && src != null;
  const link = source ? src : Default;
  const props = fill ? { fill, sizes: "100%" } : { sizes: "100vw" };

  return (
    <div
      className={cn(
        "duration-700 ease-in-out relative h-full w-full overflow-hidden bg-transparent",
        rounded,
        {
          "rounded-none": !rounded,
          "wave-animation bg-[#cbd5e0]!": isLoading,
        },
      )}
    >
      <Image
        className={cn(
          "object-cover duration-700 ease-in-out object-center scale-100 blur-0",
          className,
          {
            "scale-125! blur-xl!": isLoading,
          },
        )}
        src={link}
        alt={alt}
        width={width}
        height={height}
        style={style}
        placeholder="empty"
        onError={() => setIsError(true)}
        onLoad={() => setIsLoading(false)}
        priority
        {...props}
      />
    </div>
  );
};

export default CImage;
