import React, { useState, useEffect } from "react";
import { FormControl, FormControlLabel, Radio } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledContentError,
  StyledBoxDes,
  StyledInputName,
  StyleInputNumberPhone,
  StyledRadioStatus,
  StyledBoxButtonModal,
  StyledBtnCancel,
  StyledBtnCreate,
} from "@/components/UserForm/UserForm.styles";
import { useNavigate } from "react-router-dom";
import { Users, useCreateUser } from "@/hooks/useFetch";
import { UserItem } from "@/components/NewUser/NewUser";
interface ChildrenProps {
  inputData?: Users[];
  children?: string | JSX.Element | JSX.Element[];
  onSubmit: (value: UserItem) => void;
}
const UserForm = ({ inputData, children, onSubmit }: ChildrenProps) => {
  //const { mutate: createUser } = useCreateUser();

  //const [users, setUsers] = useState<Users[]>([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (inputData) {
  //     setUsers(inputData);
  //   }
  // }, [inputData]);

  const handleClose = () => {
    navigate("../");
  };

  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues: {
      name: "",
      role: "",
      team: "",
      status: "Active",
      tel: "",
      image: "",
    },
  });

  const { errors } = formState;

  const onFormSubmitCreateUserHandle = handleSubmit((userItem) => {
    //const day = new Date();

    //const id = users.length + 1;

    // const newUser = {
    //   ...userItem,
    //   id: id,

    //   date: [
    //     day.getDate(),
    //     day.toLocaleString("en-US", { month: "short" }),
    //     day.toLocaleString("en-US", { year: "2-digit" }),
    //   ].join(" "),

    //   time: [
    //     ("0" + day.getHours()).substr(-2),
    //     ("0" + day.getMinutes()).substr(-2),
    //   ].join(":"),
    // };

    //createUser(newUser);

    onSubmit(userItem);

    reset();
  });

  return (
    <StyledModalHeaderContainer>
      <StyledBoxHeader>{children}</StyledBoxHeader>
      <StyledForm onSubmit={onFormSubmitCreateUserHandle}>
        <FormControl>
          <label htmlFor="name">Name</label>
          <StyledInputName
            type="text"
            id="name"
            placeholder="Jane Cooper"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter a name.",
              },
            })}
          />
          <StyledContentError>{errors.name?.message}</StyledContentError>
          <StyledBoxDes>
            <label htmlFor="role">Role</label>
            <StyledInputName
              type="text"
              id="role"
              placeholder="Staff"
              // defaultValue={}
              {...register("role", {
                required: {
                  value: true,
                  message: "Please enter a role.",
                },
              })}
            />

            <StyledContentError>{errors.role?.message}</StyledContentError>
          </StyledBoxDes>
          <StyledBoxDes>
            <label htmlFor="avatar">Avatar User</label>
            <StyledInputName
              type="text"
              id="avatar"
              placeholder="avatar.png"
              {...register("image", {
                required: {
                  value: true,
                  message: "Please enter a avatar.",
                },
              })}
            />

            <StyledContentError>{errors.image?.message}</StyledContentError>
          </StyledBoxDes>
          <StyledBoxDes>
            <label htmlFor="team">Team</label>
            <StyledInputName
              type="text"
              id="team"
              placeholder="Tech"
              {...register("team", {
                required: {
                  value: true,
                  message: "Please enter a team.",
                },
              })}
            />

            <StyledContentError>{errors.team?.message}</StyledContentError>
          </StyledBoxDes>
          <StyledBoxDes sx={{ marginTop: "16px" }}>
            <label htmlFor="tel">Phone number *</label>
            <Controller
              name="tel"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <StyleInputNumberPhone
                  {...field}
                  defaultCountry={"SG"}
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
            />
          </StyledBoxDes>

          <StyledBoxDes>
            <label htmlFor="status">Status</label>
            <FormControl>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Please choose option",
                  },
                }}
                control={control}
                name="status"
                render={({ field }) => (
                  <StyledRadioStatus
                    {...field}
                    row={true}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                  >
                    <FormControlLabel
                      value="Active"
                      control={<Radio />}
                      label="Active"
                    />

                    <FormControlLabel
                      value="Suspended"
                      control={<Radio />}
                      label="Suspended"
                    />
                  </StyledRadioStatus>
                )}
              />
            </FormControl>

            <StyledContentError>{errors.status?.message}</StyledContentError>
          </StyledBoxDes>

          <StyledBoxButtonModal>
            <StyledBtnCancel onClick={handleClose}>CANCEL</StyledBtnCancel>
            <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
          </StyledBoxButtonModal>
        </FormControl>
      </StyledForm>
    </StyledModalHeaderContainer>
  );
};

export default UserForm;
