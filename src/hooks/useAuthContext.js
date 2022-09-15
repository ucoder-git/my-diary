import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context  // state 와  dispatch 함수가 들어있습니다.
}