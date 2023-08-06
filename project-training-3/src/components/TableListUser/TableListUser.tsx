import { useEffect, useState } from "react";
import { Table, TableRow, TableCell, Box } from "@mui/material";
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
} from "@/components/TableListUser/TableListUser.styled";
import { useUsers } from "@/hooks/useFetch";
import { Users } from "@/hooks/useFetch";
import RolePermission from "../Role&Permission/Role&Permission";

interface TableListUserProps {
  isPage?: number;
}
const TableListUser = ({ isPage }: TableListUserProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Users[]>();
  const [statusUser, setStatusUser] = useState<Users[] | undefined>();
  const { data, error, isLoading } = useUsers();
  const [search, setSearch] = useState("");
  console.log(search);

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

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  if (isLoading) return <>{"Loading..."}</>;
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  const TableListUsers = statusUser
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((user) => {
      const { id, name, image, numberPhone, status, role, team, lastActive } =
        user;
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
              <StyledTitleNumberPhone>{numberPhone}</StyledTitleNumberPhone>
            </Box>
          </StyledTableCellName>
          <TableCell>{role}</TableCell>
          <TableCell>{team}</TableCell>
          <StyledTableCellStatus>
            <StyledTitleStatus>{status}</StyledTitleStatus>
          </StyledTableCellStatus>
          <TableCell>
            <StyledTableRowContent>{lastActive.date}</StyledTableRowContent>
            <StyledTableRowContent>{lastActive.time}</StyledTableRowContent>
          </TableCell>
          <TableCell>
            <StyledButtonEdit>
              <StyleIcon />
            </StyledButtonEdit>
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

  const onClickButtonStatus = (status: string) => {
    const listUsers = users?.filter((user) => {
      return user.status === status;
    });

    setStatusUser(listUsers);
  };

  return (
    <div>
      {isPage === 1 ? (
        <StyledTableContainer>
          <TableHeader
            onClickButtonStatus={onClickButtonStatus}
            onSearch={onSearch}
          />
          <Table>
            <StyledTableHead>
              <TableRow>
                <StyledTitleRowName>Name</StyledTitleRowName>
                <StyledTitleRow>Role</StyledTitleRow>
                <StyledTitleRow>Team</StyledTitleRow>
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
