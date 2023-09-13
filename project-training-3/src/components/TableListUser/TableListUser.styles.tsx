import {
  styled,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  TablePagination,
  Button,
  Box,
  Modal,
  RadioGroup,
} from "@mui/material";

import { MuiTelInput } from "mui-tel-input";

export const StyledBoxContainer = styled(Box)(() => ({
  display: "flex",
}));
export const StyledBodyContainer = styled(Box)(({ theme }) => ({
  width: "82%",
  backgroundColor: "#fbfcfc",
  position: "relative",
}));
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

export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  backgroundColor: "#FFF",
  display: "flex",
  justifyContent: "space-between",
  "& .css-levciy-MuiTablePagination-displayedRows": {
    paddingLeft: "630px",
  },
}));

export const StyledModal = styled(Modal)(() => ({
  position: "absolute",
  top: "50px",
  left: "410px",
}));

export const StyledInputDes = styled("input")(({ theme }) => ({
  width: "572px",
  height: "122px",
  borderRadius: "16px",
  padding: "12px 0px 100px 12px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  textAlign: "start",
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
