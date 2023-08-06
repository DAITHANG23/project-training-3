import {
  styled,
  Typography,
  Box,
  TableCell,
  TableContainer,
  TableRow,
  Modal,
  Button,
} from "@mui/material";
import { BiEditAlt } from "react-icons/bi";

export const StyledBoxContainer = styled("div")(() => ({
  margin: "40px",
  position: "relative",
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(5),
  borderRadius: "16px",
}));
export const StyleBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
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

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  width: "256px",
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
  "& :th": {
    borderBottom: "1px solid #E8ECEE",
  },
}));

export const StyledTableCellDes = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
  "& .css-sbrnbi-MuiTableCell-root": {
    borderBottom: "1px solid #E8ECEE",
  },
}));

export const StyleEditIcon = styled(BiEditAlt)(({ theme }) => ({
  cursor: "pointer",
  width: "32px",
  height: "32px",
  transition: "all 0.5s",
  color: theme.palette.primary.light,

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const StyledTableRowEdit = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": { border: 0 },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));

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
export const StyledModal = styled(Modal)(() => ({
  position: "absolute",
  top: "150px",
  left: "410px",
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

export const StyledInputDes = styled("input")(({ theme }) => ({
  width: "572px",
  height: "122px",
  borderRadius: "16px",
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const StyledBoxButton = styled(Box)(() => ({
  position: "absolute",
  top: "240px",
  right: "0px",
  display: "flex",
  gap: "16px",
}));

export const StyledBtnCancle = styled(Button)(({ theme }) => ({
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

export const StyledContentError = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.error.main,
  textAlign: "center",
}));
