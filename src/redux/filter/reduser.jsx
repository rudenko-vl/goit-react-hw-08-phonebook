import { createReducer } from "@reduxjs/toolkit";
import { inputСhange } from "./action";

const filter = createReducer("", {
  [inputСhange]: (_, { payload }) => payload,
});

export { filter };