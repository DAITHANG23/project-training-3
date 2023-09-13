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
  RadioGroup,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const StyledBoxContainer = styled(Box)(() => ({
  display: "flex",
}));

export const StyledBodyContainer = styled(Box)(({ theme }) => ({
  width: "82%",
  backgroundColor: "#fbfcfc",
  position: "relative",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));

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

export const StyledBoxHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: theme.spacing(4),
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
  margin: "38px",
  borderRadius: "16px",
  border: "none",
  width: "93%",
}));

export const StyledTableCellRadio = styled(TableCell)(() => ({
  width: "200px",
}));

export const StyledTableRowTitle = styled(TableRow)(({ theme }) => ({
  "&:nth-child(13) td, &:last-child th,&:last-child td": { border: 0 },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));

export const StyledTableUpdate = styled(Table)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({ gap: "160px" }));

export const StyledTableTitle = styled(TableCell)(() => ({
  width: "57%",
}));

export const StyledTableCellCollapse = styled(TableCell)(({ theme }) => ({
  padding: "0px",
  border: "none",
}));

export const BpIcon = styled(CheckIcon)(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  color: theme.palette.background.paper,
  border: `1px solid ${theme.palette.text.primary}`,
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

export const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  border: "none",
  "input:hover ~ &": {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));
