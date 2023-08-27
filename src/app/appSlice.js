import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country_list: null,
};

export const callTypes = { list: "list", actions: "actions" };

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    country_list: (state, action) => {
      const { country_list } = action.payload;
      state.country_list = country_list;
      state.listLoading = false;
      state.error = null;
    },
  },
});
