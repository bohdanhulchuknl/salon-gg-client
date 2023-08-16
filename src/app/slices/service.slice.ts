import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface ServiceState {
 inViewService: null | string
}

const initialState: ServiceState = {
  inViewService: null

};

export const serviceSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInViewService: (state, action: PayloadAction<string | null>) => {
      state.inViewService = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInViewService } = serviceSlice.actions;

export const selectInViewService = (state: RootState) => state.service.inViewService;

export default serviceSlice.reducer;
