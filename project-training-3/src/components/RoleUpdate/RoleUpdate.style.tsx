import {
  styled,
  TableCell,
  Collapse,
  Typography,
  Button,
  TableContainer,
  Box,
  Table,
  TableRow,
} from "@mui/material";

export const Styled = styled("div");

export const StyledTableCell = styled(TableCell)<{ styleactive: boolean }>(
  ({ theme, styleactive }) => ({
    fontSize: "14px",
    fontWeight: 700,
    color: styleactive ? theme.palette.error.main : theme.palette.text.primary,
    "& .css-78trlr-MuiButtonBase-root-MuiIconButton-root": {
      color: styleactive
        ? theme.palette.error.main
        : theme.palette.text.primary,
    },
  })
);

export const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const StyledBoxTitle = styled(Box)(() => ({
  display: "flex",
}));
export const StyledTableCellTitle = styled(TableCell)(() => ({
  width: "624px",
  fontSize: "16px",
  fontWeight: 700,
}));
export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.light,
  border: "none",
  borderRadius: "1000px",
  padding: "2px 9px",
  height: "28px",
}));

export const StyledTitleActive = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: "none",
  borderRadius: "1000px",
  padding: "2px 9px",
  height: "28px",
}));

export const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "16px",
  padding: "0 5px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1, 3),
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  width: "70px",
  height: "40px",
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: "38px",
  borderRadius: "16px",
  border: "none",
}));

export const StyledTableCellRadio = styled(TableCell)(() => ({
  width: "200px",
}));
export const StyledTableRowTitle = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": { border: 0 },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));
export const StyledTableUpdate = styled(Table)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
}));
