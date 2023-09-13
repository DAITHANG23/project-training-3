import { useState } from "react";
import { Users, Status } from "@/hooks/useFetch";
import { TableRow, Box, TableCell, Button, Popover } from "@mui/material";
import {
  StyledTableCellName,
  StyledTableRowContent,
  StyledTitleNumberPhone,
  StyledTableCellStatus,
  StyledTitleStatus,
  StyledButtonEdit,
  StyleIcon,
  StyledEditIcon,
  StyledDeleteIcon,
} from "@/components/UserItem/UserItem.styles";
interface UserItemProps {
  id: number;
  image: number;
  name: number;
  tel: number;
  date: number;
  time: number;
  role: number;
  team: number;
  status: number;
}
export const UserItem = ({
  id,
  image,
  name,
  tel,
  date,
  time,
  role,
  team,
  status,
}: UserItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // remove user
  const onRemoveUserItem = (idItem: number) => {
    // const userItemRemove = statusUser?.filter((user) => {
    //   return user.id !== idItem;
    // });
    // setStatusUser(userItemRemove);
  };

  // edit user
  const onEditUserItem = (idItem: number) => {};

  // popover item
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const openPop = Boolean(anchorEl);
  const idPopItem = openPop ? "simple-popover" : undefined;

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
};
