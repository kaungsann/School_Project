import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const auth = useSelector((state) => state.auth); // GET LOGIN DATA FROM REDUX STORE

  return useMemo(() => auth, [auth]);
};
