import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

type CButtonProps =
  | { title: string; children?: never } // Requires title if children is not provided
  | { title?: string; children: React.ReactNode }; // Requires children if title is not provided

export default function CButton({
  title,
  icon,
  variant,
  size,
  className,
  onClick,
  font,
  children,
  ...props
}: CButton & CButtonProps) {
  return (
    <Button
      {...props}
      font={font}
      size={size}
      onClick={onClick}
      variant={variant}
      className={cn(className)}
    >
      {icon}
      {title}
      {children}
    </Button>
  );
}
