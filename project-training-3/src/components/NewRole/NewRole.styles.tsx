import { styled, Box, Typography, Button } from "@mui/material";

export const StyledModalHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  width: "620px",
  height: "410px",
  border: "none",
  padding: "26px 24px",
  // position: "relative",
}));

export const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledTitleModal = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: theme.palette.primary.main,
}));

export const StyledButtonClose = styled("button")(({ theme }) => ({
  borderRadius: "1000px",
  width: "32px",
  height: "32px",
  cursor: "pointer",
  border: "none",
  color: theme.palette.text.primary,
  fontSize: "16px",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(5),
}));

export const StyledInputName = styled("input")(({ theme }) => ({
  width: "572px",
  padding: theme.spacing(0, 2),
  borderRadius: "1000px",
  marginTop: "3px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const StyledContentError = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.error.main,
  textAlign: "center",
}));

export const StyledBoxDes = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledInputDes = styled("input")(({ theme }) => ({
  width: "572px",
  height: "122px",
  borderRadius: "16px",
  padding: "12px 0px 100px 12px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  textAlign: "start",
}));

export const StyledBoxButton = styled(Box)(() => ({
  position: "absolute",
  top: "240px",
  right: "0px",
  display: "flex",
  gap: "16px",
}));

export const StyledBtnCancel = styled(Button)(({ theme }) => ({
  width: "87px",
  height: "40",
  border: `1px solid ${theme.palette.primary.main}`,
  fontSize: "12px",
  fontWeight: "700",
  padding: theme.spacing(1, 3),
  textAlign: "center",
  borderRadius: "1000px",
}));

export const StyledBtnCreate = styled(Button)(({ theme }) => ({
  width: "87px",
  height: "40",
  border: "none",
  fontSize: "12px",
  fontWeight: "700",
  padding: theme.spacing(1, 3),
  textAlign: "center",
  borderRadius: "1000px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
}));
