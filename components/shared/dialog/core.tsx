"use client";

import store from "@/store";
import CDialog from "@/shared/custome/c-dialog";
import DConfirmation from "./d-confirmation";
import { useBreakpoint } from "@/lib/hooks";
import CDrawer from "../custome/c-drawer";

export default function CoreDialog() {
  const { dialog, drawer, closeDrawer, closeDialog } = store();
  const open = dialog?.open || drawer?.open || false;
  const id = dialog?.id || drawer?.id;
  const showClose = dialog?.showClose || drawer?.showClose;
  const paddingContent = dialog?.paddingContent || drawer?.paddingContent;
  const headerTitle = dialog?.headerTitle || drawer?.headerTitle;
  const showHeader = dialog?.showHeader;
  const height = dialog?.height || drawer?.height || "";
  const width = dialog?.width || "";
  const headerClassName = dialog?.headerClassName || "";
  const { isMobile } = useBreakpoint();

  const Content = () => {
    switch (id) {
      case "CONFRIMATION":
        return <DConfirmation />;
    }
  };

  const renderContent = () => {
    switch (isMobile) {
      case true:
        return (
          <CDrawer
            open={open}
            setIsOpen={() => closeDrawer}
            headerTitle={headerTitle}
            height={height}
            paddingContent={paddingContent}
            showClose={showClose}
          >
            <Content />
          </CDrawer>
        );
      default:
        return (
          <CDialog
            paddingContent={paddingContent}
            open={open}
            headerTitle={headerTitle}
            showHeader={showHeader}
            height={height}
            width={width}
            setIsOpen={() => closeDialog}
            headerClassName={headerClassName}
            showClose={showClose}
          >
            <Content />
          </CDialog>
        );
    }
  };

  return open ? renderContent() : null;
}
