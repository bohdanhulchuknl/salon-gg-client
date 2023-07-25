import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { IUser } from "../../types/users.type";

export interface AuthState {
  user: null | IUser;
  authError: string;
}

const initialState: AuthState = {
  user: null,
  authError: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.authError = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut, setAuthError } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
