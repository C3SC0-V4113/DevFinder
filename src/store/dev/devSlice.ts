import { Data } from "@/interfaces/OctokitResponse";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DevState {
  status: string;
  activeDev: Data;
  developers: Data[];
}

const initialState: DevState = {
  status: "loading", // authenticated, not-authenticated, checking
  activeDev: {} as Data,
  developers: [],
};

export const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    onLoading: (state) => {
      state.status = "loading";
    },
    onSelectDev: (state, { payload }) => {
      state.status = "loaded";
      state.activeDev = payload;
    },
    onQueueDev: (state) => {
      state.developers = [...state.developers, state.activeDev];
    },
  },
});
// Action creators are generated for each case reducer function
export const { onLoading, onSelectDev, onQueueDev } = devSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDev = (state: RootState) => state.dev.activeDev;

// export default authSlice.reducer;
