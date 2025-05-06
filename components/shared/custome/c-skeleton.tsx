import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function CSkeleton({
  length,
  className,
}: {
  length: number;
  className?: string;
}) {
  return (
    <>
      {[...Array(length)].map((_, id) => (
        <SkeletonCard key={id} className={className} />
      ))}
    </>
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Skeleton className="rounded-[16px]" />
    </div>
  );
}
