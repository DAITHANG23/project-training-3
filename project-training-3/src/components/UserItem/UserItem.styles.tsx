import { styled, TableCell, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledTableRowContent = styled(Typography)(() => ({
  fontSize: "14px",
}));

export const StyledTitleNumberPhone = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "14px",
}));

export const StyledTableCellStatus = styled(TableCell)(() => ({
  paddingLeft: "100px !important",
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

export const StyleIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledEditIcon = styled(EditIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));

export const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));
