import { useNavigate, useParams } from "react-router-dom";

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
} from "@/components/EditUser/EditUser.styles";
import { useUser, Users, useUpdateUser } from "@/hooks/useFetch";
import { FormControl, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";

const EditUser = () => {
  const navigate = useNavigate();

  const params = useParams();

  const idUser: string | undefined = params.id;

  const [user, setUser] = useState<Users | undefined>();

  const { data, isLoading, error } = useUser(idUser);

  const { mutate: updateUserItem } = useUpdateUser(idUser);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

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

  const onHandlerChange =
    (name: keyof Users) => (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onFormSubmitCreateUserHandle = handleSubmit((userItem) => {
    navigate("../");
    console.log("user", userItem);
    updateUserItem({ id: idUser, user: userItem });
    //reset();
  });

  return (
    <StyledModalHeaderContainer>
      <StyledBoxHeader>
        <StyledTitleModal>Update user</StyledTitleModal>
        <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
      </StyledBoxHeader>
      <StyledForm onSubmit={onFormSubmitCreateUserHandle}>
        <FormControl>
          <label htmlFor="name">Name</label>
          <StyledInputName
            type="text"
            id="name"
            placeholder="Jane Cooper"
            // onChange={onHandlerChange("name")}
            {...register("name", {
              required: {
                value: true,
                message: "Please enter a name.",
              },
              //onChange: onHandlerChange("name"),
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
                //onChange: onHandlerChange("role"),
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
                //onChange: onHandlerChange("image"),
              })}
            />

            <StyledContentError>{errors.image?.message}</StyledContentError>
          </StyledBoxDes>
          <StyledBoxDes>
            <label htmlFor="team">Team</label>
            <StyledInputName
              type="text"
              id="team"
              //defaultValue={user?.team ?? ""}
              placeholder="Tech"
              {...register("team", {
                required: {
                  value: true,
                  message: "Please enter a team.",
                },
                //onChange: onHandlerChange("team"),
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
              //defaultValue={user?.tel}
              render={({ field, fieldState }) => (
                <StyleInputNumberPhone
                  {...field}
                  // value={user?.tel}
                  defaultCountry={"SG"}
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                  //onChange={() => onHandlerChange("tel")}
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
                //defaultValue={user?.status}
                render={({ field }) => (
                  <StyledRadioStatus
                    {...field}
                    row={true}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    //onChange={() => onHandlerChange("status")}
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
            <StyledBtnCreate type="submit"> UPDATE</StyledBtnCreate>
          </StyledBoxButtonModal>
        </FormControl>
      </StyledForm>
    </StyledModalHeaderContainer>
  );
};

export default EditUser;
