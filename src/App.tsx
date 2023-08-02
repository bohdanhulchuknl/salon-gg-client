import { useEffect } from "react";

import { Navbar, AllRoutes, Footer } from "./components";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  signIn,
  setAuthError,
  signOut,
} from "./app/slices/auth.slice";
import { IUser } from "./types/users.type";
import axios, { AxiosResponse } from "axios";

import { serverUri } from "./config/config";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    const getUser = () => {
      axios
        .get(`${serverUri}/auth/getuser`, {
          withCredentials: true,
        })
        .then((resObject: AxiosResponse<IUser, any>) => {
          console.log(resObject.data);
          if (resObject.data) {
            dispatch(signIn(resObject.data));
          }
        })
        .catch((err: { message: string }) => {
          console.log(err);
          dispatch(signOut());
          dispatch(setAuthError(err.message));
        });
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      <header className="container sticky top-0 z-10 h-full max-h-[90px]  ">
        <Navbar user={user} />
      </header>
      <main className=" flex-grow flex-shrink flex-auto">
        <AllRoutes user={user} />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
