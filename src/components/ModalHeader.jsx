import { AuthContext } from "@/contexts/authContext";
import { setActive } from "@/routes/main";
import { Form, Modal } from "antd";
import Menu from "components/Menu/Menu";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import SignInForm from "./SignInForm/SignInForm";

const Header = ({  }) => {
  

  return (
    <HeaderContainer ref={headerRef}>
      <Menu />
      <Button onClick={user.isLoggedIn ? signOut : onOpenModal}>
        {user.isLoggedIn ? "Sign Out" : "Sign In"}
      </Button>
      
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #3a3838;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px #202020;
;
`
export default Header;