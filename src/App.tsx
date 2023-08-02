import { useEffect } from "react";

import { Navbar, AllRoutes, Footer } from "./components";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  signIn,
  //!
  setAuthError,
  signOut,
  //!!
} from "./app/slices/auth.slice";
//!
import { IUser } from "./types/users.type";
import axios, { AxiosResponse } from "axios";

import { serverUri } from "./config/config";
//!!
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //!
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
    //!!
    //!
    // dispatch(
    //   signIn({
    //     emails: [
    //       {
    //         value: "bohdanhulchuknl@gmail.com",
    //         verified: true,
    //         _id: "64c90cf99af3313d3604cfac",
    //       },
    //     ],
    //     googleId: "113085998945233853344",
    //     locale: "ru",
    //     name: "Олександр Клименко",
    //     phone: {
    //       value:'',
    //       verified: false
    //     },
    //     picture: "https://lh3.googleusercontent.com/a/AAcHTtflTYJUvVS4y_2xzGdQ6ftEicXkQLKXqs9R8-vAMnl4=s96-c",
    //     roles: [2001, 1984, 5150]
    //   })
    // );
    // !!
  }, []);

  return (
    <div className="flex flex-col items-center min-h-full">
      <header className="bg-[#1E1823] sticky top-0 z-[1000] w-full m-auto px-5">
        <Navbar user={user} />
      </header>
      <main className=" flex-grow flex-shrink flex-auto">
        <AllRoutes user={user} />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
