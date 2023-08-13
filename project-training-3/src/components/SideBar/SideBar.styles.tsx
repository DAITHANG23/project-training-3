import { styled, Box, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { BsDot } from "react-icons/bs";

export const StyledSideBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: "18%",
  height: "1195px",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "66%",
  margin: theme.spacing(5),
  cursor: "pointer",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#10182B",
  width: "100%",
  height: "192px",
  color: theme.palette.background.paper,
}));

export const StyledImageUser = styled("img")(({ theme }) => ({
  width: "23px",
  height: "23px",
  color: theme.palette.background.paper,
}));

export const StyledButton = styled("button")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(3, 4),
  gap: theme.spacing(1),
  width: "100%",
  backgroundColor: "#10182B",
  color: theme.palette.background.paper,
  border: "none",
  cursor: "pointer",
  borderLeft: `4px solid ${theme.palette.error.main}`,
  position: "relative",
}));

export const StyledButtonUser = styled("button")<{ styleActive: boolean }>(
  ({ theme, styleActive }) => ({
    display: "flex",
    padding: "20px 0 20px 24px",
    gap: theme.spacing(2),
    width: "100%",
    backgroundColor: "#10182B",
    color: styleActive ? theme.palette.error.main : "#94999C",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
  })
);

export const StyledDirectionIcon = styled(ChevronRightOutlinedIcon)(() => ({
  width: "24px",
  height: "24px",
  position: "absolute",
  top: "20px",
  right: "20px",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "24px",
}));

export const StyledDotIcon = styled(BsDot)(() => ({
  width: "24px",
  height: "24px",
}));
