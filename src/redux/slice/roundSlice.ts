/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

interface RoundState {
    round: number;
}

const initialState: RoundState = {
    round: 1,
};

const roundSlice = createSlice({
    name: "round",
    initialState,
    reducers: {
        setRound(state, action: PayloadAction<number>) {
            state.round = action.payload;
        },
    },
});

export const { setRound } = roundSlice.actions;
export default roundSlice.reducer;
