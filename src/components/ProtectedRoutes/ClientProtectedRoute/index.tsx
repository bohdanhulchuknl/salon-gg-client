import React from "react";
import { Navigate } from "react-router-dom";

import ROLES_LIST from "../../../utils/roleList";
import { IUser } from "../../../types/users.type";
import { UserProtectNavBar } from "../../ProtectedNavBars";

type Props = {
  children: React.ReactNode;
  user: null | IUser;
};

const redirectPath = "/";

const ClientProtectedRoute = ({ children, user }: Props) => {
  if (!user?.roles.find((el) => el === ROLES_LIST.User)) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <div className="w-full">
      <UserProtectNavBar user={user} />
      {children}
    </div>
  );
};

export default ClientProtectedRoute;
