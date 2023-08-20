import {
  styled,
  TableCell,
  Typography,
  TableBody,
  TableHead,
  TableContainer,
  TablePagination,
  Button,
  Box,
  Modal,
  RadioGroup,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MuiTelInput } from "mui-tel-input";
export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: "93%",
  margin: "32px 40px",
  border: "none",
  borderRadius: "16px",
  "&:last-child td, &:last-child th": { border: 0 },
}));

export const StyledTableBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
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

export const StyledBoxButton = styled(Box)(({ theme }) => ({
  margin: "5px 10px 24px 0",
  textAlign: "right",
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: "none",
  "& .css-1smula1-MuiTableCell-root": {
    border: "none",
  },
}));
export const StyledTitleRow = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "181px",
}));
export const StyledTitleRowName = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "300px",
}));
export const StyledTitleRowStatus = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "300px",
  textAlign: "center",
}));

export const StyledTableRowContent = styled(Typography)(() => ({
  fontSize: "14px",
}));

export const StyledTitleNumberPhone = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "14px",
}));

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledTitleStatus = styled(Typography)(({ theme }) => ({
  border: "none",
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.text.primary,
  textAlign: "center",
  padding: "4px 12px",
  borderRadius: "100px",
  width: "92px",
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledButtonEdit = styled("button")(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  backgroundColor: "#FFF",
  display: "flex",
  justifyContent: "space-between",
  "& .css-levciy-MuiTablePagination-displayedRows": {
    paddingLeft: "630px",
  },
}));
export const StyledTableCellStatus = styled(TableCell)(() => ({
  paddingLeft: "100px !important",
}));
export const StyleIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledTitleModal = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: theme.palette.primary.main,
}));
export const StyledModal = styled(Modal)(() => ({
  position: "absolute",
  top: "50px",
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
  paddingTop: theme.spacing(3),
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
  padding: "12px 0px 100px 12px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  textAlign: "start",
}));

export const StyledBoxButtonModal = styled(Box)(() => ({
  position: "absolute",
  top: "430px",
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

export const StyledContentError = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.error.main,
  textAlign: "center",
}));

export const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledModalHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  width: "620px",
  height: "580px",
  border: "none",
  padding: "26px 24px",
  // position: "relative",
}));

export const StyledBoxDes = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledRadioStatus = styled(RadioGroup)(({ theme }) => ({
  marginTop: theme.spacing(3),
  gap: theme.spacing(3),
}));

export const StyleInputNumberPhone = styled(MuiTelInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "1000px",
    marginTop: "5px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 2),
    fontSize: "14px",
  },

  "& .MuiFormHelperText-root.Mui-error": {
    fontSize: "16px",
    textAlign: "center",
  },
}));
