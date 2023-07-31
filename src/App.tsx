import { useEffect } from "react";

import { Navbar, AllRoutes, Footer, Carousel } from "./components";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  signIn,
  setAuthError,
  signOut,
} from "./app/slices/auth.slice";
import { IUser } from "./types/users.type";
import axios, { AxiosResponse } from "axios";

import sliderOne from "./assets/sliderOne.jpg";
import sliderTwo from "./assets/sliderTwo.jpg";
import sliderThe from "./assets/sliderTwo.jpg";

import { serverUri } from "./config/config";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const slider = [sliderOne, sliderTwo, sliderThe];

  useEffect(() => {
    console.log(user);
    const getUser = () => {
      axios
        .get(`${serverUri}/auth/login/success`, {
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
      <header className="sticky top-0 z-10 ">
        <Navbar user={user} />
      </header>
      <main className=" flex-grow flex-shrink flex-auto">
        <AllRoutes user={user} />
        <Carousel autoSlide={true}>
          {slider.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
