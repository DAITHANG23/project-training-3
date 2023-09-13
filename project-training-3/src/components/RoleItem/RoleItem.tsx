import React from "react";
import { TableCell } from "@mui/material";
import {
  StyledTableRowEdit,
  StyledTableCell,
  StyledTableCellDes,
  StyleEditIcon,
} from "@/components/RoleItem/RoleItem.styles";
import { useNavigate } from "react-router-dom";

interface Roles {
  role: string;
  describe: string;
  id: string;
}

const RoleItem = ({ id, role, describe }: Roles) => {
  const navigate = useNavigate();
  const onEditRoleHandler = (id: string) => {
    // const existingRole = roles.find((roleItem) => roleItem.id === id);
    // setRoleUpdate(existingRole?.role);
    navigate(`/roles/${id}`);
  };

  return (
    <StyledTableRowEdit key={id}>
      <StyledTableCell>{role}</StyledTableCell>
      <StyledTableCellDes align="left">{describe}</StyledTableCellDes>

      <TableCell align="right">
        <StyleEditIcon onClick={() => onEditRoleHandler(id)} />
      </TableCell>
    </StyledTableRowEdit>
  );
};

export default RoleItem;
