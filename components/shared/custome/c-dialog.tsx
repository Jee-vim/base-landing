import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/c-dialog.module.css";
import CloseDialog from "@/shared/close-dialog";

const CModal = ({
  open,
  setIsOpen,
  height = "h-[70vh]",
  width = "w-[70vw]",
  children,
  showHeader = true,
  headerTitle,
  paddingContent = true,
  headerClassName,
  showClose,
}: CModal) => {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(styles.content, height, width, !paddingContent && "p-0!")}
      >
        {showHeader && (
          <DialogHeader className={cn(showClose && "text-left")}>
            <DialogTitle className={cn(styles.title, headerClassName)}>
              {headerTitle}
            </DialogTitle>
            {showClose && <CloseDialog />}
          </DialogHeader>
        )}

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CModal;
