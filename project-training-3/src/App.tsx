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
import { Users } from "@/hooks/useFetch";
import { useState } from "react";

function App() {
  const [data, setData] = useState<Users[] | undefined>();

  const [onPage, setOnPage] = useState("users");

  const onSetData = (data: Users[]) => {
    setData(data);
  };

  const onSetOpen = (data: boolean) => {};

  const onChoosePage = (value: string) => {
    setOnPage(value);
  };

  let titleHeader = "Users";

  let imageHeader = "./images/user.png";

  if (onPage === "user") {
    titleHeader = "Users";

    imageHeader = "./images/user.png";
  } else if (onPage === "role") {
    titleHeader = "Role & Permission";

    imageHeader = "../images/privacy.png";
  }

  return (
    <StyledBoxContainer>
      <SideBar onChoosePage={onChoosePage} />
      <StyledBodyContainer>
        <Header title={titleHeader} image={imageHeader} />
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />

          <Route
            path="/users"
            element={<TableListUser onSetData={onSetData} />}
          >
            <Route path="/users/new" element={<NewUser data={data} />} />

            <Route path="/users/:id" element={<EditUser />} />
          </Route>

          <Route path="/roles" element={<RolePermission />}>
            <Route
              path="/roles/new"
              element={<NewRole onSetOpen={onSetOpen} />}
            />
          </Route>
          <Route path="/roles/:role/:id" element={<RoleUpdate />} />
        </Routes>
      </StyledBodyContainer>
    </StyledBoxContainer>
  );
}

export default App;
