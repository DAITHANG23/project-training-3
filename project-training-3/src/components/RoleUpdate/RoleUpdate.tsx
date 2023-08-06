import { useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useForm } from "react-hook-form";
import {
  StyledTableCell,
  StyledCollapse,
  StyledTitle,
  StyledTitleActive,
  StyledSpan,
  StyledButton,
  StyledTableContainer,
  StyledTableCellTitle,
  StyledBoxHeader,
  StyledBoxTitle,
  StyledTableCellRadio,
  StyledTableUpdate,
  StyledTableRowTitle,
} from "./RoleUpdate.style";

interface RoleUpdateProps {
  roleUpdated: string;
}

const RoleUpdate = ({ roleUpdated }: RoleUpdateProps) => {
  const [cardIDOpen, setCardIDOpen] = useState<string>();
  const [open, setOpen] = useState(false);
  const elements = [
    "Dashboard",
    "Reports",
    "Alarm & Events",
    "Sensors",
    "Site configuration",
    "Device configuration",
    "Usermanagement",
  ];
  const onClick = (id: string) => {
    setCardIDOpen(id);
    setOpen(!open);
  };
  const { register, handleSubmit } = useForm();

  const onFormSubmitEditHandle = handleSubmit((data) => {
    // setRoles(newRoleList);
    console.log(data);
  });

  const TableBodyContent = elements.map((el) => {
    const elementsFeature = ["Add", "Edit", "View"];

    const TableEdit = elementsFeature.map((elFeature) => {
      return (
        <StyledTableRowTitle key={`${elFeature}-${el}`}>
          <TableCell sx={{ width: "616px" }}>
            {elFeature} {el}
          </TableCell>

          <TableCell sx={{ width: "196px" }}>
            <input
              {...register(`${elFeature}-${el}`, {
                required: true,
              })}
              value="Yes"
              type="radio"
              name={`${elFeature}-${el}`}
            />
          </TableCell>
          <TableCell sx={{ width: "196px" }}>
            <input
              {...register(`${elFeature}-${el}`, {
                required: true,
              })}
              value="No"
              type="radio"
              name={`${elFeature}-${el}`}
            />
          </TableCell>
        </StyledTableRowTitle>
      );
    });

    return (
      <>
        <StyledTableRowTitle
          onClick={() => onClick(el)}
          aria-label="expand row"
        >
          <StyledTableCell styleactive={cardIDOpen === el && open}>
            {el}
          </StyledTableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <StyledTableCell styleactive={cardIDOpen === el && open}>
            <IconButton>
              {cardIDOpen === el && open ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </StyledTableCell>
        </StyledTableRowTitle>

        <StyledCollapse
          key={el}
          in={cardIDOpen === el ? open : undefined}
          timeout="auto"
          unmountOnExit
        >
          <StyledTableUpdate>
            <TableBody>{TableEdit}</TableBody>
          </StyledTableUpdate>
        </StyledCollapse>
      </>
    );
  });

  return (
    <Box>
      <form onSubmit={onFormSubmitEditHandle}>
        <StyledBoxHeader>
          <StyledBoxTitle>
            <StyledTitle>User management</StyledTitle>
            <StyledSpan>/</StyledSpan>
            <StyledTitle>Roles & Permission</StyledTitle>
            <StyledSpan>/</StyledSpan>
            <StyledTitleActive>{roleUpdated} role</StyledTitleActive>
          </StyledBoxTitle>

          <StyledButton type="submit">SAVE</StyledButton>
        </StyledBoxHeader>

        <StyledTableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCellTitle>
                  {roleUpdated.toUpperCase()} ROLE
                </StyledTableCellTitle>
                <StyledTableCellRadio>Yes</StyledTableCellRadio>
                <StyledTableCellRadio>No</StyledTableCellRadio>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{TableBodyContent}</TableBody>
          </Table>
        </StyledTableContainer>
      </form>
    </Box>
  );
};

export default RoleUpdate;
