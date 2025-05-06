import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import CloseModal from "../close-dialog";

const CDrawer = ({
  open,
  setIsOpen,
  children,
  headerTitle,
  paddingContent = true,
  showClose = true,
}: CDrawer) => {
  return (
    <Drawer
      open={open}
      onOpenChange={(isOpen) => (!isOpen ? setIsOpen() : null)}
      dismissible={false}
    >
      <DrawerContent>
        <DrawerHeader className={cn(showClose && "text-left py-0")}>
          <DrawerTitle className="text-foreground!">{headerTitle}</DrawerTitle>
          {showClose && <CloseModal />}
        </DrawerHeader>
        <div className={cn("p-4", !paddingContent && "p-0")}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default CDrawer;
