import axios, { AxiosResponse } from "axios";
import { serverUri } from "../config/config";

import { IUser } from "../types/users.type";

export const getUserAPI = () => {
    console.log("GET_USER")
 return axios
    .get(`${serverUri}/auth/getuser`, {
      withCredentials: true,
    })
    .then((resObject: AxiosResponse<IUser, any>) => {
      return resObject.data
    })
    .catch((err: { message: string }) => {
        throw new Error(err.message)
    //   dispatch(signOut());
    //   dispatch(setAuthError(err.message));
    });
};

export const logout = () => {
  axios
    .get(`${serverUri}/auth/logout`, {
      withCredentials: true,
    })
    .then((data) => {
      console.log(data.data);
      if (data.data === "done") {
        // navigate("/");
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // window.open(`${serverUri}/auth/logout`, "_self");
  // const res = await fetch("http://localhost:5000/auth/logout")
  // console.log(res)
};
