import { useContext } from "react";
import { AuthContext } from "../Context";

export const useLogout = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const logout = async () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return logout;
};
