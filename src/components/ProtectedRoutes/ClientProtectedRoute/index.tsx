import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";

import ROLES_LIST from "../../../utils/roleList";
import { IUser } from "../../../types/users.type";

type Props = {
  children: React.ReactNode;
  user: null | IUser
};

const redirectPath = "/";

const ClientProtectedRoute = ({ children, user }: Props) => {

  const content = useMemo(() => {
    if (!user?.roles.find((el) => el === ROLES_LIST.User)) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  }, [user]);

  return content;
};

export default ClientProtectedRoute;
