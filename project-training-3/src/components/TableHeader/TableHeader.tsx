import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import {
  StyleTableHeaderContainer,
  StyledButtonHeader,
  StyledBoxButton,
  StyledInputSearch,
  StyledIconGlassBold,
} from "@/components/TableHeader/TableHeader.styles";
import { useSearching } from "@/hooks/useSearching";

interface TableHeaderProps {
  onClickButtonStatus: (status: Status) => void;
  onSearch: (value: string) => void;
}
type Status = "Active" | "Suspended";
const TableHeader = ({ onClickButtonStatus, onSearch }: TableHeaderProps) => {
  const [status, setStatus] = useState<Status>("Active");

  useEffect(() => {
    if (search) onSearch(search);
  });
  const [search, onSearchHandler] = useSearching();
  const onClickChooseStatus = (status: Status) => {
    setStatus(status);
    onClickButtonStatus(status);
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
