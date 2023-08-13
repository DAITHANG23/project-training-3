import Header from "./components/Header/Header";
import { StyledBoxContainer, StyledBodyContainer } from "@/App.styles";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import TableListUser from "./components/TableListUser/TableListUser";

function App() {
  const [page, setPage] = useState<number>();

  return (
    <StyledBoxContainer>
      <SideBar setPage={setPage} />
      <StyledBodyContainer>
        <Header page={page} />
        <TableListUser valuePage={page} />
      </StyledBodyContainer>
    </StyledBoxContainer>
  );
}

export default App;
