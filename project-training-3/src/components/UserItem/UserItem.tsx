import { useEffect, useState } from "react";
import { useRemoveUser } from "@/hooks/useFetch";
import {
  TableRow,
  Box,
  TableCell,
  Button,
  Popover,
  Typography,
} from "@mui/material";
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
  StyledModal,
  StyledBoxModal,
  StyledModalEdit,
} from "@/components/UserItem/UserItem.styles";
import { useNavigate } from "react-router-dom";
import EditUser from "@/components/EditUser/EditUser";

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
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    mutate,
    isLoading: isLoadingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useRemoveUser();

  useEffect(() => {
    if (isEditing) {
      // navigate(`/users/${id}`);
    }
  }, [isEditing, navigate, id]);

  // remove user
  const onRemoveUserItem = () => {
    setIsDeleting(true);
  };

  const handleDelete = (id: number) => {
    const idUser = String(id);

    mutate(idUser);

    navigate("../");
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  // edit user
  const onEditUserItem = () => {
    setIsEditing(true);
    navigate(`/users/${id}`);
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

  return (
    <>
      {isEditing && (
        <StyledModalEdit
          open={isEditing}
          onClose={handleStopDelete}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
        >
          <EditUser />
        </StyledModalEdit>
      )}
      {isDeleting && (
        <StyledModal
          open={isDeleting}
          onClose={handleStopDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBoxModal>
            <Typography sx={{ fontSize: "24px" }}>Are you sure?</Typography>
            <Typography>
              Do you really want to delete this event? This action cannot be
              undone.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {isLoadingDeletion && <p>Deleting, please wait...</p>}
              {!isLoadingDeletion && (
                <>
                  <Button
                    sx={{
                      font: "inherit",
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: "transparent",
                      color: "#3f0c26",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    onClick={handleStopDelete}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{
                      font: "inherit",
                      cursor: "pointer",
                      padding: "0.5rem 1.5rem",
                      border: "none",
                      backgroundColor: "#530F66",
                      color: "#fff",
                      borderRadius: "4px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.26)",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </Box>
          </StyledBoxModal>
        </StyledModal>
      )}

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
              <Button onClick={onEditUserItem}>
                <StyledEditIcon />
                Edit
              </Button>
            </Box>
            <Box>
              <Button onClick={onRemoveUserItem}>
                <StyledDeleteIcon />
                Remove
              </Button>
            </Box>
          </Popover>
        </TableCell>
      </TableRow>
    </>
  );
};
