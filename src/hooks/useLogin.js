import { useState } from "react";

const useLogin = () => {
    const [login, setLogin] = useState(false);
    const toggleLogin = () => {
        setLogin((prev) => (!prev));
      };
      return [login, toggleLogin]
}
export default useLogin