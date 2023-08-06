import { Box } from "@mui/material";
import { useState } from "react";
import {
  StyleTableHeaderContainer,
  StyledButtonHeader,
  StyledBoxButton,
  StyledInputSearch,
  StyledIconGlassBold,
} from "@/components/TableHeader/TableHeader.style";

interface TableHeaderProps {
  onClickButtonStatus: (status: string) => void;
  onSearch: (item: string) => void;
}

const TableHeader = ({ onClickButtonStatus, onSearch }: TableHeaderProps) => {
  const [status, setStatus] = useState<string>("Active");
  const [search, setSearch] = useState("");
  const onClickChooseStatus = (status: string) => {
    setStatus(status);
    onClickButtonStatus(status);
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <StyleTableHeaderContainer>
      <StyledBoxButton>
        <StyledButtonHeader
          status={status === "Active"}
          onClick={() => onClickChooseStatus("Active")}
        >
          Active
        </StyledButtonHeader>
        <StyledButtonHeader
          status={status === "Suspended"}
          onClick={() => onClickChooseStatus("Suspended")}
        >
          Suspended
        </StyledButtonHeader>
      </StyledBoxButton>
      <Box sx={{ position: "relative" }}>
        <StyledIconGlassBold />
        <StyledInputSearch
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchHandler}
        />
      </Box>
    </StyleTableHeaderContainer>
  );
};

export default TableHeader;
