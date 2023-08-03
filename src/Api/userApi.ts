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
