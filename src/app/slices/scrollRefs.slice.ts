import { RefObject } from "react";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IScrollRefs {
  home: { ref: null | RefObject<HTMLDivElement>; isInView: boolean };
  service: { ref: null | RefObject<HTMLDivElement>; isInView: boolean };
  whyWe: { ref: null | RefObject<HTMLDivElement>; isInView: boolean };
  works: { ref: null | RefObject<HTMLDivElement>; isInView: boolean };
  team: { ref: null | RefObject<HTMLDivElement>; isInView: boolean };
}

const initialState: IScrollRefs = {
  home: {
    ref: null,
    isInView: false,
  },
  service: {
    ref: null,
    isInView: false,
  },
  whyWe: {
    ref: null,
    isInView: false,
  },
  works: {
    ref: null,
    isInView: false,
  },
  team: {
    ref: null,
    isInView: false,
  },
};

export const scrollRefsSlice = createSlice({
  name: "scrollRefs",
  initialState,
  reducers: {
    //home
    setHomeRef: (
      state,
      action: PayloadAction<RefObject<HTMLDivElement> | null>
    ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      state.home.ref = action.payload;
    },
    setHomeIsInView: (state, action: PayloadAction<boolean>) => {
      state.home.isInView = action.payload;
    },
    //service
    setServiceRef: (
      state,
      action: PayloadAction<RefObject<HTMLDivElement> | null>
    ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      state.service.ref = action.payload;
    },
    setServiceIsInView: (state, action: PayloadAction<boolean>) => {
      state.service.isInView = action.payload;
    },
    //whyWe
    setWhyWeRef: (
      state,
      action: PayloadAction<RefObject<HTMLDivElement> | null>
    ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      state.whyWe.ref = action.payload;
    },
    setWhyWeIsInView: (state, action: PayloadAction<boolean>) => {
      state.whyWe.isInView = action.payload;
    },
    //works
    setWorksRef: (
      state,
      action: PayloadAction<RefObject<HTMLDivElement> | null>
    ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      state.works.ref = action.payload;
    },
    setWorksIsInView: (state, action: PayloadAction<boolean>) => {
      state.works.isInView = action.payload;
    },
    //team
    setTeamRef: (
      state,
      action: PayloadAction<RefObject<HTMLDivElement> | null>
    ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      state.team.ref = action.payload;
    },
    setTeamIsInView: (state, action: PayloadAction<boolean>) => {
      state.team.isInView = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHomeRef,
  setHomeIsInView,
  setServiceIsInView,
  setServiceRef,
  setWhyWeIsInView,
  setWhyWeRef,
  setWorksIsInView,
  setWorksRef,
  setTeamIsInView,
  setTeamRef,
} = scrollRefsSlice.actions;
//home
export const selectHomeRef = (state: RootState) => state.scrollRefs.home.ref;
export const selectHomeIsInView = (state: RootState) =>
  state.scrollRefs.home.isInView;
//service
export const selectServiceRef = (state: RootState) =>
  state.scrollRefs.service.ref;
export const selectServiceIsInView = (state: RootState) =>
  state.scrollRefs.service.isInView;
//whyWe
export const selectWhyWeRef = (state: RootState) => state.scrollRefs.whyWe.ref;
export const selectWhyWeIsInView = (state: RootState) =>
  state.scrollRefs.whyWe.isInView;
//works
export const selectWorksRef = (state: RootState) => state.scrollRefs.works.ref;
export const selectWorksIsInView = (state: RootState) =>
  state.scrollRefs.works.isInView;
//team
export const selectTeamRef = (state: RootState) => state.scrollRefs.team.ref;
export const selectTeamIsInView = (state: RootState) =>
  state.scrollRefs.team.isInView;

export default scrollRefsSlice.reducer;
