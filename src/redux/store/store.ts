"use client";

import { configureStore } from "@reduxjs/toolkit";

import roundSlice from "../slice/roundSlice";

const store = configureStore({
    reducer: {
        round: roundSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
