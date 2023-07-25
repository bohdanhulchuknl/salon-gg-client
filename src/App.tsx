import { useEffect } from "react";

import { Navbar, AllRoutes } from "./components";


import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  signIn,
  setAuthError,
  signOut,
} from "./app/slices/auth.slice";
import { IUser } from "./types/users.type";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject: IUser) => {
          dispatch(signIn(resObject));
        })
        .catch((err: { message: string }) => {
          dispatch(signOut());
          dispatch(setAuthError(err.message));
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <AllRoutes user={user}/>
    </div>
  );
};

export default App;
