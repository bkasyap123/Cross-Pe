import { create } from "zustand";

const useAuth = create((set) => ({
  isLoggedIn: !!document.cookie.slice(6),
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
}));

export default useAuth;
