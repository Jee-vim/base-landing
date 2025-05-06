import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

type Props = {
  triggerbtn: ReactNode | string;
  children: ReactNode;
  classNameContent?: string;
};

export function CDropdown({ triggerbtn, children, classNameContent }: Props) {
  const renderTrigger =
    typeof triggerbtn === "string" ? (
      <button type="button">{triggerbtn}</button>
    ) : (
      triggerbtn
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{renderTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={classNameContent || "min-w-fit"}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
