import { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  TableSortLabel,
  Popover,
  Button,
} from "@mui/material";
import TableHeader from "@/components/TableHeader/TableHeader";

import {
  StyledTitleRow,
  StyledTableCellName,
  StyledTableRowContent,
  StyledTitleNumberPhone,
  StyledTitleStatus,
  StyledButtonEdit,
  StyledTableBody,
  StyledTableHead,
  StyledTableContainer,
  StyleIcon,
  StyledTableCellStatus,
  StyledTitleRowName,
  StyledTitleRowStatus,
  StyledTablePagination,
  StyledButton,
  StyledBoxButton,
  StyledModal,
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledInputName,
  StyledContentError,
  StyledBoxDes,
  StyledBtnCancel,
  StyledBtnCreate,
  StyledBoxButtonModal,
  StyledRadioStatus,
  StyleInputNumberPhone,
  StyledDeleteIcon,
  StyledEditIcon,
} from "@/components/TableListUser/TableListUser.styles";
import { useUsers, Users, Status, useCreateUser } from "@/hooks/useFetch";
import RolePermission from "@/components/RolePermission/RolePermission";

import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { useSortingTable } from "@/hooks/useSortingTable";
import { usePaging } from "@/hooks/usePaging";

interface TableListUserProps {
  valuePage?: number;
}

const TableListUser = ({ valuePage }: TableListUserProps) => {
  const [users, setUsers] = useState<Users[] | undefined>([]);
  const [statusUser, setStatusUser] = useState<Users[] | undefined>();
  const { data, error, isLoading } = useUsers();
  const { mutate: createUser } = useCreateUser();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const userItem = statusUser?.filter((user) => {
      if (user.name.toLowerCase().includes(search.toLowerCase())) return true;
    });

    setStatusUser(userItem);
  }, [search]);

  useEffect(() => {
    const listUsersActive = users?.filter((user) => {
      return user.status === "Active";
    });
    setStatusUser(listUsersActive);
  }, [users]);

  // Paging Table
  const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
    usePaging();

  //Sorting Table
  const [
    createSortHandle,
    sortedTableRow,
    getComparator,
    oneOderDirection,
    valueToOrderBy,
  ] = useSortingTable();

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

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  if (isLoading) return <>{"Loading..."}</>;
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;
  const { errors } = formState;
  // Modal create user

  const onOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmitCreateUserHandle = handleSubmit((userItem) => {
    const day = new Date();

    // fetch("/users/new", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     ...userItem,
    //     id: uuidv4(),
    //     date: [
    //       day.getDate(),
    //       MONTHS[day.getMonth()],
    //       day.getFullYear().toString().substr(-2),
    //     ].join(" "),
    //     time: [
    //       ("0" + day.getHours()).substr(-2),
    //       ("0" + day.getMinutes()).substr(-2),
    //     ].join(":"),
    //   }),
    // }).then((res) => {
    //   if (res) refetch();
    // });
    const newUser = {
      ...userItem,
      id: Number(uuidv4()),
      date: [
        day.getDate(),
        MONTHS[day.getMonth()],
        day.getFullYear().toString().substr(-2),
      ].join(" "),
      time: [
        ("0" + day.getHours()).substr(-2),
        ("0" + day.getMinutes()).substr(-2),
      ].join(":"),
    };
    createUser(newUser);
    reset();
    setOpen(false);
  });

  // popover item
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const openPop = Boolean(anchorEl);
  const idPopItem = openPop ? "simple-popover" : undefined;

  // remove user
  const onRemoveUserItem = (idItem: number) => {
    const userItemRemove = statusUser?.filter((user) => {
      return user.id !== idItem;
    });

    setStatusUser(userItemRemove);
  };
  // edit user
  const onEditUserItem = (idItem: number) => {};

  const TableListUsers = sortedTableRow(
    statusUser,
    getComparator(oneOderDirection, valueToOrderBy)
  )
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((user) => {
      const { id, name, image, tel, status, role, team, date, time } = user;
      return (
        <TableRow key={id}>
          <StyledTableCellName>
            <img
              src={`./images/${image}`}
              alt="avatar"
              width={"40px"}
              height={"40px"}
            />
            <Box>
              <StyledTableRowContent>{name}</StyledTableRowContent>
              <StyledTitleNumberPhone>{tel}</StyledTitleNumberPhone>
            </Box>
          </StyledTableCellName>
          <TableCell>{role}</TableCell>
          <TableCell>{team}</TableCell>
          <StyledTableCellStatus>
            <StyledTitleStatus>{status}</StyledTitleStatus>
          </StyledTableCellStatus>
          <TableCell>
            <StyledTableRowContent>{date}</StyledTableRowContent>
            <StyledTableRowContent>{time}</StyledTableRowContent>
          </TableCell>
          <TableCell>
            <StyledButtonEdit onClick={handleClick}>
              <StyleIcon />
            </StyledButtonEdit>
            <Popover
              id={idPopItem}
              open={openPop}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box>
                <Button onClick={() => onEditUserItem(id)}>
                  <StyledEditIcon />
                  Edit
                </Button>
              </Box>
              <Box>
                <Button onClick={() => onRemoveUserItem(id)}>
                  <StyledDeleteIcon />
                  Remove
                </Button>
              </Box>
            </Popover>
          </TableCell>
        </TableRow>
      );
    });

  const onSearch = (item: string) => {
    setSearch(item);
  };

  const onClickButtonStatus = (status: Status) => {
    const listUsers = users?.filter((user) => {
      return user.status === status;
    });

    setStatusUser(listUsers);
  };

  return (
    <div>
      {valuePage === 1 ? (
        <StyledTableContainer>
          <StyledBoxButton>
            <StyledButton onClick={onOpenModal}>Create User</StyledButton>
          </StyledBoxButton>
          <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <StyledModalHeaderContainer>
              <StyledBoxHeader>
                <StyledTitleModal>Create user</StyledTitleModal>
                <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
              </StyledBoxHeader>
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
                  <StyledContentError>
                    {errors.name?.message}
                  </StyledContentError>
                  <StyledBoxDes>
                    <label htmlFor="role">Role</label>
                    <StyledInputName
                      type="text"
                      id="role"
                      placeholder="Staff"
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

                    <StyledContentError>
                      {errors.image?.message}
                    </StyledContentError>
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

                    <StyledContentError>
                      {errors.team?.message}
                    </StyledContentError>
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
                          helperText={
                            fieldState.invalid ? "Tel is invalid" : ""
                          }
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

                    <StyledContentError>
                      {errors.status?.message}
                    </StyledContentError>
                  </StyledBoxDes>

                  <StyledBoxButtonModal>
                    <StyledBtnCancel onClick={handleClose}>
                      CANCEL
                    </StyledBtnCancel>
                    <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
                  </StyledBoxButtonModal>
                </FormControl>
              </StyledForm>
            </StyledModalHeaderContainer>
          </StyledModal>
          <TableHeader
            onClickButtonStatus={onClickButtonStatus}
            onSearch={onSearch}
          />
          <Table>
            <StyledTableHead>
              <TableRow>
                <StyledTitleRowName>
                  <TableSortLabel onClick={() => createSortHandle("name")}>
                    Name
                  </TableSortLabel>
                </StyledTitleRowName>
                <StyledTitleRow>
                  <TableSortLabel
                    // active={valueToOrderBy === "name"}
                    // direction={
                    //   valueToOrderBy === "name" ? oneOderDirection : "asc"
                    // }
                    onClick={() => createSortHandle("role")}
                  >
                    Role
                  </TableSortLabel>
                </StyledTitleRow>
                <StyledTitleRow>
                  <TableSortLabel onClick={() => createSortHandle("team")}>
                    Team
                  </TableSortLabel>
                </StyledTitleRow>
                <StyledTitleRowStatus>Status</StyledTitleRowStatus>
                <StyledTitleRow>Last active</StyledTitleRow>
                <StyledTitleRow sx={{ width: "32px" }}></StyledTitleRow>
              </TableRow>
            </StyledTableHead>
            <StyledTableBody>{TableListUsers}</StyledTableBody>
          </Table>
          <StyledTablePagination
            rowsPerPageOptions={[5, 10, 20, 30]}
            count={20}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Show"
            labelDisplayedRows={({ from, to, count }) =>
              `From ${from}-${to} of  ${count} items`
            }
          />
        </StyledTableContainer>
      ) : (
        <RolePermission />
      )}
    </div>
  );
};

export default TableListUser;
