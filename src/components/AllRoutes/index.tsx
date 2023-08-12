import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import {
  Home,
  Login,
  Admin,
  Editor,
  User,
  ClientHistory,
  CreateOrderSelectMaster,
  CreateOrderSelectService,
  CreateOrderSelectServiceOptions,
} from "../../pages";

import {
  AdminProtectedRoute,
  EditorProtectedRoute,
  ClientProtectedRoute,
} from "../ProtectedRoutes";

import { IUser } from "../../types/users.type";
import { MyTransition } from "../Custom";

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
  {
    element: <CreateOrderSelectServiceOptions />,
    path: "/create-order-select-service-options",
  },
];

interface IProps {
  user: null | IUser;
}

const AllRoutes = ({ user }: IProps) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {user && (
          <>
            {clientRoutes.map((el) => (
              <Route
                path={el.path}
                element={
                  <ClientProtectedRoute user={user}>
                    <MyTransition>{el.element}</MyTransition>
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
    </AnimatePresence>
  );
};

export default AllRoutes;
