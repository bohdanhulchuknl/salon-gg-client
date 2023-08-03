import { useEffect } from "react";

import { Navbar, AllRoutes, Footer } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectUser,
  signIn,
  //!
  setAuthError,
  signOut,
  //!!
} from "./app/slices/auth.slice";
//!
import { getUserAPI } from "./Api/userApi";
//!!
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    //!
    console.log(user);
    getUserAPI()
      .then((res) => {
        if (res) {
          dispatch(signIn(res));
        }
      })
      .catch((err:Error) => {
        dispatch(signOut());
        dispatch(setAuthError(err.message));
      });
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
    //       value: "",
    //       verified: false,
    //     },
    //     picture:
    //       "https://lh3.googleusercontent.com/a/AAcHTtflTYJUvVS4y_2xzGdQ6ftEicXkQLKXqs9R8-vAMnl4=s96-c",
    //     roles: [2001, 1984, 5150],
    //   })
    // );
    // !!
  }, []);

  return (
    <div className="flex flex-col items-center min-h-full">
      <header className="bg-[#1E1823] sticky top-0 z-[1000] w-full m-auto px-5">
        {location.pathname === "/" && <Navbar user={user} />}
      </header>
      <main className=" flex-grow flex-shrink flex-auto w-full">
        <AllRoutes user={user} />
      </main>
      <footer className="w-full">
        {location.pathname === "/" && <Footer />}
      </footer>
    </div>
  );
};

export default App;
