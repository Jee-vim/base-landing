import CButton from "@/components/shared/custome/c-button";
import { CDropdown } from "@/components/shared/custome/c-dropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";

export default function DemoDropdown() {
  return (
    <div className="flex items-center gap-5">
      <CDropdown triggerbtn="click me">
        <DropdownMenuItem>helo</DropdownMenuItem>
        <DropdownMenuItem>world</DropdownMenuItem>
      </CDropdown>
      <CDropdown
        triggerbtn={
          <CButton size="sm" title="click me" icon={<IoIosMenu size={24} />} />
        }
      >
        <DropdownMenuItem>helo</DropdownMenuItem>
        <DropdownMenuItem>world</DropdownMenuItem>
      </CDropdown>
    </div>
  );
}
