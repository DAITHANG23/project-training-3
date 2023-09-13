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
// const router = createBrowserRouter([
//   { path: "/", element: <Navigate to="/users" /> },
//   {
//     path: "/users",
//     element: <TableListUser />,
//     children: [
//       {
//         path: "/users/new",
//         element: <NewUser />,
//       },
//       {
//         path: "/users/:id",
//         element: <UserItem />,
//       },
//       {
//         path: "/users/:id/edit",
//         element: <EditUser />,
//       },
//     ],
//   },

//   {
//     path: "/roles",
//     element: <RolePermission />,
//     children: [
//       {
//         path: "/roles/new",
//         element: <NewRole />,
//       },
//     ],
//   },
//   {
//     path: "/roles/:id",
//     element: <RoleUpdate />,
//   },
// ]);
function App() {
  const [data, setData] = useState<Users[] | undefined>();

  const onSetData = (data: Users[]) => {
    setData(data);
  };

  const onSetOpen = (data: boolean) => {};
  return (
    <StyledBoxContainer>
      <SideBar />
      <StyledBodyContainer>
        <Header title="Role & Permission" image="../images/privacy.png" />
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route
            path="/users"
            element={<TableListUser onSetData={onSetData} />}
          >
            <Route path="/users/new" element={<NewUser data={data} />} />

            <Route path="/users/:id/edit" element={<EditUser />} />
          </Route>

          <Route path="/roles" element={<RolePermission />}>
            <Route
              path="/roles/new"
              element={<NewRole onSetOpen={onSetOpen} />}
            />
          </Route>
          <Route path="/roles/:id" element={<RoleUpdate />} />
        </Routes>
      </StyledBodyContainer>
    </StyledBoxContainer>
  );
}

export default App;
