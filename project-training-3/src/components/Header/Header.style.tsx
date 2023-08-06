import { styled, Box, Typography } from "@mui/material";
import { PiMagnifyingGlassBold } from "react-icons/pi";
export const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "72px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 24px",
}));

export const StyledUserContainer = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: theme.palette.text.primary,
  paddingTop: "5px",
}));

export const StyledLogin = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  width: "276px",
}));

export const StyledSearch = styled("button")(({ theme }) => ({
  border: "none",
  width: "40px",
  height: "40px",
  borderRadius: "1000px",
  cursor: "pointer",
  backgroundColor: theme.palette.background.default,
}));

export const StyledIconGlass = styled(PiMagnifyingGlassBold)(({ theme }) => ({
  fontSize: "25px",
  color: theme.palette.text.primary,
}));

export const StyledButtonBell = styled("button")(() => ({
  border: "none",
  borderRadius: "1000px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
}));

export const StyledButtonLogin = styled("button")(() => ({
  display: "flex",
  width: "140px",
  height: "40px",
  border: "none",
  borderRadius: "1000px",
  padding: "4px 8px",
  gap: "8px",
  cursor: "pointer",
}));

export const StyledImgAvatar = styled("img")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  border: "none",
  borderRadius: "1000px",
  width: "24px",
  height: "24px",
  marginTop: "5px",
}));

export const StyledContainerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledNameLogin = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
}));

export const StyledRoleLogin = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "11px",
  lineHeight: "12px",
  fontWeight: "400",
}));
