import { useCreateRole } from "@/hooks/useFetch";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledInputName,
  StyledContentError,
  StyledBoxDes,
  StyledInputDes,
  StyledBoxButton,
  StyledBtnCancel,
  StyledBtnCreate,
} from "@/components/NewRole/NewRole.styles";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NewRoleProps {
  onSetOpen: (data: boolean) => void;
}

const NewRole = ({ onSetOpen }: NewRoleProps) => {
  const { mutate: createRole } = useCreateRole();

  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      role: "",
      describe: "",
    },
  });

  const { errors } = formState;

  const onFormSubmitRoleHandle = handleSubmit((roleItem) => {
    const newRole = { ...roleItem, id: uuidv4() };
    createRole(newRole);

    reset();

    onSetOpen(false);

    navigate("/roles");
  });

  const handleClose = () => {
    onSetOpen(false);

    navigate("/roles");
  };

  return (
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
          <StyledContentError>{errors.role?.message}</StyledContentError>
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

            <StyledContentError>{errors.describe?.message}</StyledContentError>
          </StyledBoxDes>

          <StyledBoxButton>
            <StyledBtnCancel onClick={handleClose}>CANCEL</StyledBtnCancel>
            <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
          </StyledBoxButton>
        </FormControl>
      </StyledForm>
    </StyledModalHeaderContainer>
  );
};

export default NewRole;
