import { useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Radio,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useForm, Controller } from "react-hook-form";
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
  BpCheckedIcon,
  BpIcon,
  StyledTableRow,
  StyledRadioGroup,
  StyledTableCellCollapse,
  StyledTableTitle,
} from "@/components/RoleUpdate/RoleUpdate.styles";

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
  const { handleSubmit, control } = useForm();

  const onFormSubmitEditHandle = handleSubmit((data) => {
    console.log(data);
  });

  const TableBodyContent = elements.map((el) => {
    const elementsFeature = ["Add", "Edit", "View"];

    const TableEdit = elementsFeature.map((elFeature) => {
      return (
        <StyledTableRowTitle key={`${elFeature}-${el}`}>
          <StyledTableTitle>
            {elFeature} {el}
          </StyledTableTitle>
          <TableCell>
            <FormControl>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Please choose option",
                  },
                }}
                control={control}
                name={`${elFeature}-${el}`}
                render={({ field, fieldState }) => (
                  <StyledRadioGroup
                    {...field}
                    row={true}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={
                        <Radio
                          checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      }
                      label=""
                    />

                    <FormControlLabel
                      value="No"
                      control={
                        <Radio
                          checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      }
                      label=""
                    />
                  </StyledRadioGroup>
                )}
              />
            </FormControl>
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
        <TableRow aria-label="purchases">
          <StyledTableCellCollapse component="th" colSpan={6}>
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
          </StyledTableCellCollapse>
        </TableRow>
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
              <StyledTableRow>
                <StyledTableCellTitle>
                  {roleUpdated.toUpperCase()} ROLE
                </StyledTableCellTitle>
                <StyledTableCellRadio>Yes</StyledTableCellRadio>
                <StyledTableCellRadio>No</StyledTableCellRadio>
                <TableCell></TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>{TableBodyContent}</TableBody>
          </Table>
        </StyledTableContainer>
      </form>
    </Box>
  );
};

export default RoleUpdate;
