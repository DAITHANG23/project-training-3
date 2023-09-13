import { styled, Typography, Box, TableContainer, Modal } from "@mui/material";

export const StyledBoxBodyContainer = styled(Box)(() => ({
  display: "flex",
}));
export const StyledBodyContainer = styled(Box)(({ theme }) => ({
  width: "82%",
  backgroundColor: "#fbfcfc",
  position: "relative",
}));
export const StyledBoxContainer = styled("div")(() => ({
  position: "relative",
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: "32px 40px",
  borderRadius: "16px",
  width: "93%",
}));
export const StyleBoxHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "40px",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  padding: theme.spacing(1, 3),
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "all 0.5s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const StyledModal = styled(Modal)(() => ({
  position: "absolute",
  top: "150px",
  left: "410px",
}));
