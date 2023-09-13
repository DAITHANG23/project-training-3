import { useEffect, useState } from "react";

import {
  StyledSideBar,
  StyledImage,
  StyledBox,
  StyledImageUser,
  StyledButton,
  StyledButtonUser,
  StyledDirectionIcon,
  StyledTypography,
  StyledDotIcon,
} from "@/components/SideBar/SideBar.styles";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [isChooseUserPage, setIsChooseUserPage] = useState<boolean>(true);
  const [isChooseRolePage, setIsChooseRolePage] = useState<boolean>(false);

  const navigate = useNavigate();

  const onChooseUserPage = () => {
    setIsChooseUserPage(true);
    setIsChooseRolePage(false);
    navigate("/users");
  };

  const onChooseRolePage = () => {
    setIsChooseRolePage(true);
    setIsChooseUserPage(false);
    navigate("/roles");
  };

  return (
    <StyledSideBar>
      <StyledImage src="./images/Logo.png" alt="logo" />
      <StyledBox>
        <StyledButton>
          <StyledImageUser src="./images/user-1.png" alt="user" />
          <StyledTypography>User management</StyledTypography>
          <StyledDirectionIcon />
        </StyledButton>
        <StyledButtonUser
          styleActive={isChooseUserPage}
          onClick={onChooseUserPage}
        >
          <StyledDotIcon />
          <StyledTypography>Users</StyledTypography>
          <StyledDirectionIcon />
        </StyledButtonUser>
        <StyledButtonUser
          styleActive={isChooseRolePage}
          onClick={onChooseRolePage}
        >
          <StyledDotIcon />
          <StyledTypography>Role & Permissions</StyledTypography>
          <StyledDirectionIcon />
        </StyledButtonUser>
      </StyledBox>
    </StyledSideBar>
  );
};

export default SideBar;
