import Header from "./components/Header/Header";
import { StyledBoxContainer, StyledBodyContainer } from "@/App.style";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import TableListUser from "./components/TableListUser/TableListUser";

function App() {
  const [isPage, setIsPage] = useState<number>();

  return (
    <StyledBoxContainer>
      <SideBar setIsPage={setIsPage} />
      <StyledBodyContainer>
        <Header isPage={isPage} />
        <TableListUser isPage={isPage} />
      </StyledBodyContainer>
    </StyledBoxContainer>
  );
}

export default App;
