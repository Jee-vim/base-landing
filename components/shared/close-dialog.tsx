import { IoMdClose } from "react-icons/io";
import store from "@/store";

export default function CloseModal() {
  const { closeDialog, closeDrawer } = store();

  const handleClose = () => {
    closeDialog();
    closeDrawer();
  };

  return (
    <button
      type="button"
      onClick={handleClose}
      className="absolute right-4 top-4"
    >
      <IoMdClose size={20} />
    </button>
  );
}
