import { useEffect } from "react";

import { Navbar, AllRoutes, Footer } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//!
// import { IUser } from "./types/users.type";
//!!

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
    getUserAPI()
      .then((res) => {
        if (res) {
          dispatch(signIn(res));
        }
      })
      .catch((err: Error) => {
        dispatch(signOut());
        dispatch(setAuthError(err.message));
      });
    //!!
    //!
    // const offlineUser: IUser = {
    //   emails: [
    //     {
    //       value: "bohdanhulchuknl@gmail.com",
    //       verified: true,
    //       _id: "64c90cf99af3313d3604cfac",
    //     },
    //   ],
    //   googleId: "113085998945233853344",
    //   locale: "ru",
    //   name: "Олександр Клименко",
    //   phone: {
    //     value: "",
    //     verified: false,
    //   },
    //   picture:
    //     "https://lh3.googleusercontent.com/a/AAcHTtflTYJUvVS4y_2xzGdQ6ftEicXkQLKXqs9R8-vAMnl4=s96-c",
    //   roles: [2001, 1984, 5150],
    // };
    // dispatch(signIn(offlineUser));
    // !!
  }, []);

  return (
    <div className="flex flex-col items-center min-h-full font-apocRegular">
      <header className="absolute top-0 w-full px-5  m-auto bg-gradient-to-b from-firstColor/20 to-thirdColor/30 min-h-[80px] z-20 flex items-center shadow-sm shadow-thirdColor/30">
        {location.pathname === "/" && <Navbar user={user} />}
      </header>
      <main className="flex-auto flex-grow flex-shrink w-full h-full">
        <AllRoutes user={user} />
      </main>
      {location.pathname === "/" && (
        <footer className="w-full h-full m-auto">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default App;
