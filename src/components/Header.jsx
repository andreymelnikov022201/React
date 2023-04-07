import { useContext, useState } from "react";
import styled from "styled-components";
import useLogin from "../hooks/useLogin";
import { Button, Form, Modal } from "antd";
import LogInForm from "./LogInForm";

function Header({ headerRef }) {
  const [login, toggleLogin] = useLogin();
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmitLogin = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      onCloseModal();
      setConfirmLoading(false);
      toggleLogin(true);
    }, 2000);
  };
  return (
    <HeaderContainer>
      MARKET
      <button onClick={onOpenModal}>{login ? "logout" : "login"}</button>
      <Modal
        title={"Log In"}
        open={showModal}
        onCancel={onCloseModal}
        footer={[
          <Button
            key="back"
            style={{ marginRight: "10px" }}
            onClick={onCloseModal}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={form.submit}
          >
            Log In
          </Button>,
        ]}
      >
        <LogInForm form={form} onSubmit={handleSubmitLogin} />
      </Modal>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #3a3838;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px #202020;
  color: yellow;
`;
export default Header;
