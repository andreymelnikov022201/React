import { useState } from "react";
import styled from "styled-components";
import useLogin from "../hooks/useLogin";
import { Button, Modal } from "antd";
import LogInForm from "./LogInForm";
import { useFormik } from "formik";
import * as yup from "yup";

function Header() {
  const [login, toggleLogin] = useLogin();
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username.length > 3")
      .max(40)
      .required("Username required"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/)
      .required("Password required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmitLogin();
    },
  });

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    formik.resetForm();
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
            onClick={formik.handleSubmit}
          >
            Log In
          </Button>,
        ]}
      >
        <LogInForm formik={formik} onSubmit={handleSubmitLogin} />
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
