import { useState } from "react";

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
} from "@/components/SideBar/SideBar.style";
interface SideBarProps {
  setIsPage: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SideBar = ({ setIsPage }: SideBarProps) => {
  const [isChoosed, setIsChoosed] = useState<number>(2);

  const onChooseTitleSideBar = (id: number) => {
    setIsChoosed(id);
    setIsPage(id);
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
          styleActive={isChoosed === 1}
          onClick={() => onChooseTitleSideBar(1)}
        >
          <StyledDotIcon />
          <StyledTypography>Users</StyledTypography>
          <StyledDirectionIcon />
        </StyledButtonUser>
        <StyledButtonUser
          styleActive={isChoosed === 2}
          onClick={() => onChooseTitleSideBar(2)}
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
