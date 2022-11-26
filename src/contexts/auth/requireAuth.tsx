import { useContext } from "react";
import Login from "../../pages/Login";
import { authContext } from "./authContext";

export const requireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(authContext);

  if (!auth.user) {
    return <Login/>
  }

  return children;
}