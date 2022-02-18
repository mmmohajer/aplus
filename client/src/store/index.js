import { configureStore } from "@reduxjs/toolkit";
import reducer from "Reducers";

export const store = configureStore({ reducer });
