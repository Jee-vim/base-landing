import { Children } from "react";
import CSkeleton from "@/shared/custome/c-skeleton";
import { cn } from "@/lib/utils";

export default function DynamicList({
  isLoading,
  item,
  classNameLoading,
  classNameEmpty,
  className,
  render,
  id,
  titleEmpty,
  descriptionEmpty,
  length = 6,
}: IDynamicList) {
  return (
    <>
      <div
        id={id}
        className={cn(className, {
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]":
            !className,
        })}
      >
        {isLoading && (
          <CSkeleton
            length={length}
            className={cn("w-full min-h-60", classNameLoading)}
          />
        )}
        {Children.toArray(item?.map((item, id) => render(item, id)))}
      </div>
      {!isLoading && item?.length == 0 && (
        <div>
          <p className={cn("text-center", classNameEmpty)}>
            {titleEmpty || "No data found."}
            <br />
            {descriptionEmpty}
          </p>
        </div>
      )}
    </>
  );
}
