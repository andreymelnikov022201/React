import { useState } from "react";
import useMessage from "../hooks/useMessage";
import Message from "./Message";
const ProductDetails = ({}) =>{
    const [message, toggleMessage] = useMessage();
    const [showMessage, setShowMessage] = useState(false);
    const exchange = (money, type = "uah") => {
        return type === "uah" ? money / 38 : money * 38;
      };
    const handleOK = (e) => {
      e.preventDefault();
        setShowMessage(true);
      };
      
return(
<div>
            Cost: {exchange(2, "usd")} UAH
            <form>
              <textarea
                onChange={(e)=>toggleMessage(e)}
                value={message}
              ></textarea>
              <button onClick={(e)=>handleOK(e)}>OK</button>
            </form>
<Message
        message={`Your response '${message}' was succesfully submitted!`}
        show={showMessage}
        setShowMessage={setShowMessage}
      />
</div>
)
}
export default ProductDetails
