import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import ROLES_LIST from "../../../utils/roleList";
import { IUser } from "../../../types/users.type";
import { UserProtectNavBar } from "../../ProtectedNavBars";

type Props = {
  children: React.ReactNode;
  user: null | IUser;
};

const redirectPath = "/";
const showPath = ["/client", "/history-client"];

const ClientProtectedRoute = ({ children, user }: Props) => {
  const location = useLocation();
  if (!user?.roles.find((el) => el === ROLES_LIST.User)) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <div className="w-full">
      {showPath.includes(location.pathname) && (
        <UserProtectNavBar user={user} />
      )}

      {children}
    </div>
  );
};

export default ClientProtectedRoute;
