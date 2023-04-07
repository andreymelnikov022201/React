import { useState } from "react"

const useMessage = () =>{
    const [message, setMessage] = useState("")
    const toggleMessage = (e) => {
        setMessage( e.target.value );
      };
      return [message, toggleMessage]
}
export default useMessage