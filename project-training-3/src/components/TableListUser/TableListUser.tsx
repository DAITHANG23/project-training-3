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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
} from "@/components/TableListUser/TableListUser.styles";
import { useUsers, Users, Status } from "@/hooks/useFetch";
import RolePermission from "@/components/RolePermission/RolePermission";

import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";

interface TableListUserProps {
  valuePage?: number;
}

type Order = "asc" | "desc";

const TableListUser = ({ valuePage }: TableListUserProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Users[]>([]);
  const [statusUser, setStatusUser] = useState<Users[] | undefined>();
  const { data, error, isLoading } = useUsers();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [oneOderDirection, setOneOderDirection] = useState<Order>("asc");
  const [valueToOrderBy, setvalueToOrderBy] = useState<keyof Users>("name");
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

  console.log(statusUser);

  // Modal create user

  const { errors } = formState;
  const onOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmitCreateUserHandle = handleSubmit((userItem) => {
    const day = new Date();
    const newUser = {
      ...userItem,
      id: uuidv4(),
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

    const listUsers = [...users, newUser];
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        listUsers,
      }),
    }).then((res) => {
      if (res) window.location.reload();
    });

    reset();
    setOpen(false);
  });

  // Sorting Table
  const createSortHandle = (property: keyof Users) => {
    handleRequestSort(property);
  };
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: number }, b: { [key in Key]: number }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function sortedTableRow<T>(
    array: Users[] | undefined,
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array?.map(
      (el, index) => [el, index] as [T, number]
    );

    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
  }
  const handleRequestSort = (property: keyof Users) => {
    const isAscending =
      valueToOrderBy === property && oneOderDirection === "asc";
    setvalueToOrderBy(property);
    setOneOderDirection(isAscending ? "desc" : "asc");
  };

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
                  <EditIcon
                    sx={{ width: "20px", height: "20px", marginRight: "5px" }}
                  />
                  Edit
                </Button>
              </Box>
              <Box>
                <Button onClick={() => onRemoveUserItem(id)}>
                  <DeleteIcon
                    sx={{ width: "20px", height: "20px", marginRight: "5px" }}
                  />
                  Remove
                </Button>
              </Box>
            </Popover>
          </TableCell>
        </TableRow>
      );
    });
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
