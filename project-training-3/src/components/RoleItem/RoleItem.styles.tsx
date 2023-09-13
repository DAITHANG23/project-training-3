import { styled, TableRow, TableCell } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
export const StyledTableRowEdit = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": { border: 0 },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
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
