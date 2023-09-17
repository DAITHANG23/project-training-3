import { TableCell } from "@mui/material";
import {
  StyledTableRowEdit,
  StyledTableCell,
  StyledTableCellDes,
  StyleEditIcon,
} from "@/components/RoleItem/RoleItem.styles";
import { useNavigate } from "react-router-dom";
// import { useRoleUpdateItem } from "@/hooks/useFetch";

interface Roles {
  role: string;
  describe: string;
  id: string;
}

const RoleItem = ({ id, role, describe }: Roles) => {
  const navigate = useNavigate();

  // const { data, isLoading, error } = useRoleUpdateItem(id);

  // console.log("dataRole:", data);

  const onEditRoleHandler = () => {
    navigate(`/roles/${role}/${id}`);
  };

  return (
    <StyledTableRowEdit key={id}>
      <StyledTableCell>{role}</StyledTableCell>
      <StyledTableCellDes align="left">{describe}</StyledTableCellDes>

      <TableCell align="right">
        <StyleEditIcon onClick={onEditRoleHandler} />
      </TableCell>
    </StyledTableRowEdit>
  );
};

export default RoleItem;
