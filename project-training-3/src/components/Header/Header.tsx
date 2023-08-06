import { Typography, Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
} from "@/components/Header/Header.style";
import { useState } from "react";

interface HeaderProps {
  isPage?: number;
}
const Header = ({ isPage }: HeaderProps) => {
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
      {isPage === 1 ? (
        <StyledUserContainer>
          <img
            src="./images/user.png"
            alt="user"
            width={"36px"}
            height={"36px"}
          />
          <StyledTitle>Users</StyledTitle>
        </StyledUserContainer>
      ) : (
        <StyledUserContainer>
          <img
            src="./images/privacy.png"
            alt="user"
            width={"36px"}
            height={"36px"}
          />
          <StyledTitle>Role & Permission</StyledTitle>
        </StyledUserContainer>
      )}

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
          <ExpandMoreIcon style={{ marginTop: "5px" }} />
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
