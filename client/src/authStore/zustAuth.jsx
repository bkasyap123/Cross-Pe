import { create } from "zustand";

const useAuth = create((set) => ({
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  setLoggedIn: (loggedIn) => {
    set({ isLoggedIn: loggedIn });
    localStorage.setItem("isLoggedIn", loggedIn ? "true" : "false");
  }
}));

export default useAuth;
