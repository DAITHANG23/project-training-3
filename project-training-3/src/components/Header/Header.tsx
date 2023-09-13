import { Typography, Popover } from "@mui/material";

import {
  StyledHeaderContainer,
  StyledUserContainer,
  StyledTitle,
  StyledLogin,
  StyledSearch,
  StyledIconGlass,
  StyledButtonBell,
  StyledButtonLogin,
  StyledImgAvatar,
  StyledContainerContent,
  StyledNameLogin,
  StyledRoleLogin,
  StyledExpandMoreIcon,
} from "@/components/Header/Header.styles";
import { useState } from "react";

interface HeaderProps {
  title?: string;
  image: string;
}
const Header = ({ title, image }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <StyledHeaderContainer>
      <StyledUserContainer>
        <img src={image} alt="user" width={"36px"} height={"36px"} />
        <StyledTitle>{title}</StyledTitle>
      </StyledUserContainer>

      <StyledLogin>
        <StyledSearch>
          <StyledIconGlass />
        </StyledSearch>
        <StyledButtonBell>
          <img
            src="./images/bell.png"
            alt="bell"
            width={"24px"}
            height={"24px"}
          />
        </StyledButtonBell>

        <StyledButtonLogin onClick={handleClick}>
          <StyledImgAvatar src="./images/ico.png" alt="avatar-login" />
          <StyledContainerContent>
            <StyledNameLogin>Nicholas</StyledNameLogin>
            <StyledRoleLogin>Administrator</StyledRoleLogin>
          </StyledContainerContent>
          <StyledExpandMoreIcon />
        </StyledButtonLogin>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>...</Typography>
        </Popover>
      </StyledLogin>
    </StyledHeaderContainer>
  );
};

export default Header;
