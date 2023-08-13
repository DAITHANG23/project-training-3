import { styled, Box } from "@mui/material";

export const StyledBoxContainer = styled(Box)(() => ({
  display: "flex",
}));

export const StyledBodyContainer = styled(Box)(({ theme }) => ({
  width: "82%",
  backgroundColor: "#fbfcfc",
  position: "relative",
}));
