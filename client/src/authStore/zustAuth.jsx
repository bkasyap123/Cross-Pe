import { create } from "zustand";

const useAuth = create((set) => ({
  isLoggedIn: !!document.cookie.includes("token"),
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
}));

export default useAuth;
