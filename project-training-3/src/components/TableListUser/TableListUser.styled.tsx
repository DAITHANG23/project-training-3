import {
  styled,
  TableCell,
  Typography,
  TableBody,
  TableHead,
  TableContainer,
  TablePagination,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
