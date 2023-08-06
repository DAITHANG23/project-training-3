import { styled, Box } from "@mui/material";
import { PiMagnifyingGlassBold } from "react-icons/pi";
export const StyleTableHeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  padding: theme.spacing(2),
  borderStartEndRadius: "16px",
  borderStartStartRadius: "16px",
  border: "none",
}));

export const StyledBoxButton = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  "& .css-1xxs6sy-MuiButtonBase-root-MuiButton-root": {
    textTransform: "none",
  },
}));

export const StyledButtonHeader = styled("button")<{ status: boolean }>(
  ({ theme, status }) => ({
    padding: "4px 12px",
    color: status
      ? theme.palette.background.paper
      : theme.palette.primary.light,
    border: "none",
    borderRadius: "16px",
    backgroundColor: status
      ? theme.palette.error.main
      : theme.palette.background.default,
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 500,
    cursor: "pointer",
  })
);

export const StyledInputSearch = styled("input")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.contrastText}`,
  backgroundColor: theme.palette.background.default,
  padding: "6px 12px 6px 44px",
  borderRadius: " 16px",
  width: "216px",
  height: "32px",
}));

export const StyledIconGlassBold = styled(PiMagnifyingGlassBold)(
  ({ theme }) => ({
    position: "absolute",
    top: "6px",
    left: "16px",
    color: "#C5CACD",
    width: "20px",
    height: "20px",
  })
);
