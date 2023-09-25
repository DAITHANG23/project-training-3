import { useState, useEffect, useContext } from "react";

import { Table, TableBody } from "@mui/material";
import {
  StyledBoxContainer,
  StyledButton,
  StyledTitle,
  StyleBoxHeader,
  StyledTableContainer,
  StyledModal,
} from "@/components/RolePermission/RolePermission.styles";

import { useRoles } from "@/hooks/useFetch";

import RoleItem from "@/components/RoleItem/RoleItem";
import NewRole from "@/components/NewRole/NewRole";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "@/Context/AppContext";

interface Roles {
  role: string;
  describe: string;
  id: string;
}
const RolePermission = () => {
  const [roles, setRoles] = useState<Roles[]>([]);
  const { data, error, isLoading } = useRoles();
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  const { open, onSetOpen } = useContext(AppContext) as AppContextType;

  const handleOpen = () => {
    onSetOpen(true);
    navigate("/roles/new");
  };

  const handleClose = () => {
    onSetOpen(false);
    navigate("/roles");
  };

  // const onSetOpen = (data: boolean) => {
  //   setOpen(data);
  // };

  const listRolePermission = roles?.map((roleItem) => {
    const { id, role, describe } = roleItem;

    return <RoleItem id={id} role={role} describe={describe} />;
  });

  useEffect(() => {
    if (data) {
      setRoles(data);
    }
  }, [data]);

  if (isLoading) return <>{"Loading..."}</>;

  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <StyledBoxContainer>
      <StyleBoxHeader>
        <StyledTitle>Roles</StyledTitle>
        <StyledButton onClick={handleOpen}>Create role</StyledButton>
      </StyleBoxHeader>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <NewRole />
      </StyledModal>
      <StyledTableContainer>
        <Table>
          <TableBody>{listRolePermission}</TableBody>
        </Table>
      </StyledTableContainer>
    </StyledBoxContainer>
  );
};

export default RolePermission;
