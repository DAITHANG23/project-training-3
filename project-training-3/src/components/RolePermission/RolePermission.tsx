import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Table, TableCell, TableBody, FormControl } from "@mui/material";
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
  StyledBoxDes,
} from "@/components/RolePermission/RolePermission.styles";
import { v4 as uuidv4 } from "uuid";
import RoleUpdate from "@/components/RoleUpdate/RoleUpdate";
import { useRoles } from "@/hooks/useFetch";
import { mutate } from "swr";

interface Roles {
  role: string;
  describe: string;
  id: string;
}
const RolePermission = () => {
  const [roles, setRoles] = useState<Roles[]>([]);
  const { data, error, isLoading } = useRoles();

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

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      role: "",
      describe: "",
    },
  });
  const { errors } = formState;

  useEffect(() => {
    if (data) {
      setRoles(data);
    }
  }, [data]);

  if (isLoading) return <>{"Loading..."}</>;
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;
  console.log(data);

  const onFormSubmitRoleHandle = handleSubmit((roleItem) => {
    const newRole = {
      ...roleItem,
      id: uuidv4(),
    };
    const listRoles = [...roles, newRole];
    fetch("/roles", {
      method: "POST",
      body: JSON.stringify({
        listRoles,
      }),
    })
      // .then((res) => res.json())
      .then((res) => {
        if (res) window.location.reload();
      });

    reset();
    setOpen(false);
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
                  <StyledBoxDes>
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
                  </StyledBoxDes>

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
