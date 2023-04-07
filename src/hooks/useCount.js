import { useState } from "react";

const useCount = () => {
    const [count, setCount] = useState(0);
    const toggleCount = (e) => {
     console.log(e.target.value) 
        setCount((prev) => (
           e.target.checked ? prev + 1 : prev - 1
        ));
      };
      return [count, toggleCount]
}
export default useCount