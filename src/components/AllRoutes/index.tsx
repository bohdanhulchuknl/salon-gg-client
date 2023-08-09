import { Routes, Route, Navigate } from "react-router-dom";

import {
  Home,
  Login,
  Admin,
  Editor,
  User,
  ClientHistory,
  CreateOrderSelectMaster,
  CreateOrderSelectService,
} from "../../pages";

import {
  AdminProtectedRoute,
  EditorProtectedRoute,
  ClientProtectedRoute,
} from "../ProtectedRoutes";

import { IUser } from "../../types/users.type";

const adminRoutes = [
  {
    element: <Admin />,
    path: "/admin",
  },
];

const editorRoutes = [
  {
    element: <Editor />,
    path: "/editor",
  },
];

const clientRoutes = [
  {
    element: <User />,
    path: "/client",
  },
  {
    element: <ClientHistory />,
    path: "/history-client",
  },
  {
    element: <CreateOrderSelectMaster />,
    path: "/create-order-select-master",
  },

  {
    element: <CreateOrderSelectService />,
    path: "/create-order-select-service",
  },
];

interface IProps {
  user: null | IUser;
}

const AllRoutes = ({ user }: IProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      {user && (
        <>
          {clientRoutes.map((el) => (
            <Route
              path={el.path}
              element={
                <ClientProtectedRoute user={user}>
                  {el.element}
                </ClientProtectedRoute>
              }
              key={el.path}
            />
          ))}
          {editorRoutes.map((el) => (
            <Route
              path={el.path}
              element={
                <EditorProtectedRoute user={user}>
                  {el.element}
                </EditorProtectedRoute>
              }
              key={el.path}
            />
          ))}

          {adminRoutes.map((el) => (
            <Route
              path={el.path}
              element={
                <AdminProtectedRoute user={user}>
                  {el.element}
                </AdminProtectedRoute>
              }
              key={el.path}
            />
          ))}
        </>
      )}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AllRoutes;
