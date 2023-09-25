import { Navigate } from "react-router-dom";
import { StyledBoxContainer, StyledBodyContainer } from "@/App.styles";
import TableListUser from "./components/TableListUser/TableListUser";
import NewUser from "./components/NewUser/NewUser";
import EditUser from "./components/EditUser/EditUser";
import RolePermission from "./components/RolePermission/RolePermission";
import NewRole from "./components/NewRole/NewRole";
import RoleUpdate from "./components/RoleUpdate/RoleUpdate";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
      <StyledBoxContainer>
        <SideBar />
        <StyledBodyContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />

            <Route path="/users" element={<TableListUser />}>
              <Route path="/users/new" element={<NewUser />} />

              <Route path="/users/:id" element={<EditUser />} />
            </Route>

            <Route path="/roles" element={<RolePermission />}>
              <Route path="/roles/new" element={<NewRole />} />
            </Route>
            <Route path="/roles/:role/:id" element={<RoleUpdate />} />
          </Routes>
        </StyledBodyContainer>
      </StyledBoxContainer>
    </AppProvider>
  );
}

export default App;
