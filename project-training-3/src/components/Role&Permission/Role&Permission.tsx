import { useState } from "react";
import { useForm } from "react-hook-form";
import { Table, TableCell, TableBody, Box, FormControl } from "@mui/material";
import {
  StyledBoxContainer,
  StyledButton,
  StyledTitle,
  StyleBoxHeader,
  StyledTableCell,
  StyleEditIcon,
  StyledTableContainer,
  StyledTableCellDes,
  StyledTableRowEdit,
  StyledModal,
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledInputName,
  StyledInputDes,
  StyledBoxButton,
  StyledBtnCancle,
  StyledBtnCreate,
  StyledContentError,
} from "@/components/Role&Permission/Role&Permission.style";
import { v4 as uuidv4 } from "uuid";
import RoleUpdate from "@/components/RoleUpdate/RoleUpdate";

const RolePermission = () => {
  const [roles, setRoles] = useState([
    { role: "Administrator", describe: "Des...", id: "1" },
    {
      role: "Management",
      describe: "Des...",
      id: "2",
    },
    {
      role: "User",
      describe: "Des...",
      id: "3",
    },
  ]);

  const [roleUpdated, setRoleUpdate] = useState<string>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onEditRoleHandler = (id: string) => {
    const existingRole = roles.find((roleItem) => roleItem.id === id);
    setRoleUpdate(existingRole?.role);
  };

  const listRolePermission = roles.map((roleItem) => {
    const { role, describe, id } = roleItem;
    return (
      <StyledTableRowEdit key={id}>
        <StyledTableCell>{role}</StyledTableCell>
        <StyledTableCellDes align="left">{describe}</StyledTableCellDes>
        <TableCell align="right">
          <StyleEditIcon onClick={() => onEditRoleHandler(id)} />
        </TableCell>
      </StyledTableRowEdit>
    );
  });

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      role: "",
      describe: "",
    },
  });
  const { errors } = formState;

  const onFormSubmitRoleHandle = handleSubmit((roleItem) => {
    const newRole = {
      ...roleItem,
      id: uuidv4(),
    };
    const newRoleList = [...roles, newRole];

    setRoles(newRoleList);
  });

  return (
    <StyledBoxContainer>
      {roleUpdated ? (
        <RoleUpdate roleUpdated={roleUpdated} />
      ) : (
        <>
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
            <StyledModalHeaderContainer>
              <StyledBoxHeader>
                <StyledTitleModal>Create role</StyledTitleModal>
                <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
              </StyledBoxHeader>
              <StyledForm onSubmit={onFormSubmitRoleHandle}>
                <FormControl>
                  <label htmlFor="role">Name</label>
                  <StyledInputName
                    type="text"
                    id="role"
                    placeholder="Super Administrator"
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Please enter a role.",
                      },
                    })}
                  />
                  <StyledContentError>
                    {errors.role?.message}
                  </StyledContentError>
                  <Box sx={{ marginTop: "24px" }}>
                    <StyledInputDes
                      type="text"
                      id="role"
                      placeholder="Des of role"
                      {...register("describe", {
                        required: {
                          value: true,
                          message: "Please enter a describe.",
                        },
                      })}
                    />

                    <StyledContentError>
                      {errors.describe?.message}
                    </StyledContentError>
                  </Box>

                  <StyledBoxButton>
                    <StyledBtnCancle onClick={handleClose}>
                      CANCEL
                    </StyledBtnCancle>
                    <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
                  </StyledBoxButton>
                </FormControl>
              </StyledForm>
            </StyledModalHeaderContainer>
          </StyledModal>
          <StyledTableContainer>
            <Table>
              <TableBody>{listRolePermission}</TableBody>
            </Table>
          </StyledTableContainer>
        </>
      )}
    </StyledBoxContainer>
  );
};

export default RolePermission;
