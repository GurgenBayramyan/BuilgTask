import { RootState } from "..";

export const stateSelector = (state:RootState) => state
export const customersSelector = (state:RootState) =>  state.customersSlice