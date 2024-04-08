import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterQueryInitialStateType {
  query: any;
}

const initialState: FilterQueryInitialStateType = {
  query: {},
};

const filterQuery = createSlice({
  name: "filterQuery",
  initialState,
  reducers: {
    addQuery(
      state,
      action: PayloadAction<any>
    ) {
      state.query = { ...state.query, ...action.payload };
    },
    removeQuery(state, action: PayloadAction<string>) {
      delete state.query[action.payload];
    },
    clearAllQuery(state) {
      state.query = {};
    },
  },
});

export const { addQuery, removeQuery, clearAllQuery } = filterQuery.actions;
export default filterQuery.reducer;
