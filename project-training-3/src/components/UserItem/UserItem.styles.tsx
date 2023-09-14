import { styled, TableCell, Typography, Modal, Box } from "@mui/material";
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

export const StyledModal = styled(Modal)(() => ({
  position: "fixed",
  top: "30vh",
  left: "calc(50% - 15rem)",
}));

export const StyledBoxModal = styled(Box)(() => ({
  width: "30rem",
  height: "40vh",
  background: "white",
  border: "none",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  justifyContent: "space-around",
  textAlign: "center",
  animation: "slide-down-fade-in 300ms ease-out forwards",
  margin: 0,
  padding: "2rem",
}));
