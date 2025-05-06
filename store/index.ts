import { create } from "zustand";

const initialDrawer = {
  open: false,
  headerTitle: "",
  id: "",
  data: null,
  height: "",
  paddingContent: true,
};

const initialDialog = {
  open: false,
  showHeader: true,
  headerTitle: "",
  headerClassName: "",
  headerTitleClassName: "",
  id: "",
  data: null,
  width: "h-[70vh]",
  height: "w-[70vw]",
  paddingContent: true,
};

const store = create<IRootStore>((set) => ({
  loading: false,
  setLoading: () => set({ loading: true }),
  clearLoading: () => set({ loading: false }),
  dialog: null,
  setOpenDialog: (modal: IModal) => set({ dialog: { ...modal, open: true } }),
  closeDialog: () => set({ dialog: initialDialog }),
  drawer: null,
  setOpenDrawer: (drawer: IDrawer) =>
    set({ drawer: { ...drawer, open: true } }),
  closeDrawer: () => set({ drawer: initialDrawer }),
}));

export default store;
