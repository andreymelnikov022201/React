import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import styles from "./Message.module.css";

const Message = ({ message, show, setShowMessage }) => {
  const ref = useRef(null);

  const close = () => setShowMessage(false);

  return createPortal(
    <CSSTransition
      in={show}
      nodeRef={ref}
      timeout={200}
      classNames={{
        enterActive: styles["message-enter"],
        enterDone: styles["message-enter-active"],
        exitActive: styles["message-exit-active"],
        exitDone: styles["message-exit"],
      }}
      unmountOnExit
    >
      <MessageContainer ref={ref}>
        <p>{message}</p>
        <button onClick={close}>OK</button>
      </MessageContainer>
    </CSSTransition>,
    document.body
  );
};
const MessageContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translateX(50%);
  z-index: 999;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 10px 0px #616161;
  border-radius: 20px;
`;

export default Message;