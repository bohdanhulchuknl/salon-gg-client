import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Navbar, AllRoutes, Footer, NavBarVertical } from "./components";
import { useInView } from "framer-motion";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(true);
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
      {<NavBarVertical isShow={!isInView} user={user} />}
      <header
        ref={ref}
        className="absolute top-0 w-full px-5  m-auto bg-gradient-to-b from-firstColor/20 to-thirdColor/30 min-h-[80px] z-20 flex items-center shadow-sm shadow-thirdColor/30"
      >
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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed top-0 flex items-center justify-center w-full h-screen font-apocBold backdrop-blur-sm bg-transparent/50"
      >
        <Dialog.Panel className="relative p-10 bg-white rounded-lg drop-shadow-2xl shadow-white">
          <Dialog.Title className="flex flex-col justify-between gap-5 text-2xl">
            <p>The site is under <span className="underline text-fifth">development</span>!!!</p>
            <p>Cайт знаходиться в <span className="underline text-fifth">розробці</span>!!!</p>
         
          </Dialog.Title>


          <AiOutlineCloseSquare
            className="absolute transition cursor-pointer -right-1 h-7 w-7 -top-10 fill-white hover:fill-fifth"
            onClick={() => setIsOpen(false)}
          />
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default App;
