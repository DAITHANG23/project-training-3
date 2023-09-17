import { useEffect, useState } from "react";
import { Table, TableRow, TableSortLabel } from "@mui/material";
import TableHeader from "@/components/TableHeader/TableHeader";

import {
  StyledTitleRow,
  StyledTableBody,
  StyledTableHead,
  StyledTableContainer,
  StyledTitleRowName,
  StyledTitleRowStatus,
  StyledTablePagination,
  StyledButton,
  StyledBoxButton,
  StyledModal,
} from "@/components/TableListUser/TableListUser.styles";
import { useUsers, Users, Status } from "@/hooks/useFetch";

import { useSortingTable } from "@/hooks/useSortingTable";
import { usePaging } from "@/hooks/usePaging";

import NewUser from "@/components/NewUser/NewUser";
import { useNavigate } from "react-router-dom";
import { UserItem } from "@/components/UserItem/UserItem";

interface TableListUserProps {
  onSetData: (data: Users[]) => void;
}
const TableListUser = ({ onSetData }: TableListUserProps) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [statusUser, setStatusUser] = useState<Users[] | undefined>();
  const [dataSearch, setDataSearch] = useState<Users[] | undefined>();
  const [open, setOpen] = useState(false);

  // const { data, error, isLoading } = useUsersSearch(search);
  const navigate = useNavigate();

  useEffect(() => {
    const listUsersActive = users?.filter((user) => {
      return user.status === "Active";
    });
    setStatusUser(listUsersActive);
  }, [users]);

  useEffect(() => {
    if (dataSearch) {
      setUsers(dataSearch);
    }
  }, [dataSearch]);

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
  const sort = oneOderDirection;
  const { data, error, isLoading, isFetching } = useUsers(
    page,
    rowsPerPage,
    sort
  );

  useEffect(() => {
    if (data) {
      setUsers(data);

      onSetData(data);
    }
  }, [data, onSetData]);

  // if (isFetching) {
  //   console.log("isFetching", isFetching);
  // }

  // if (isLoading) {
  //   console.log("isLoading", isLoading);
  // }

  if (isLoading) return <>{"Loading..."} </>;

  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  // Modal create user

  const onOpenModal = () => {
    setOpen(true);

    navigate("/users/new");
  };

  const TableListUsers = sortedTableRow(
    statusUser,

    getComparator(oneOderDirection, valueToOrderBy)
  )
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((user) => {
      const { id, name, image, tel, status, role, team, date, time } = user;

      return (
        <UserItem
          key={id}
          id={id}
          name={name}
          image={image}
          tel={tel}
          status={status}
          role={role}
          team={team}
          date={date}
          time={time}
        />
      );
    });

  const onSearch = (data: Users[] | undefined) => {
    setDataSearch(data);
  };

  const onClickButtonStatus = (status: Status) => {
    const listUsers = users?.filter((user) => {
      return user.status === status;
    });

    setStatusUser(listUsers);
  };

  return (
    <StyledTableContainer>
      <StyledBoxButton>
        <StyledButton onClick={onOpenModal}>Create User</StyledButton>
      </StyledBoxButton>
      <StyledModal
        open={open}
        onClose={() => navigate("../")}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <NewUser data={users} />
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
              <TableSortLabel onClick={() => createSortHandle("role")}>
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
  );
};

export default TableListUser;
