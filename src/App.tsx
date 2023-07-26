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
import axios, {AxiosResponse} from "axios";

import { serverUri } from "./config/config";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user)
    const getUser = () => {
      axios.get(`${serverUri}/auth/login/success`,{
        withCredentials: true
      }).then((resObject:AxiosResponse<IUser, any>) => {
          console.log(resObject)
          dispatch(signIn(resObject.data));
        })
        .catch((err: { message: string }) => {
          console.log(err)
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
