import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guards: [],
};

export const GuardsResultSlice = createSlice({
  name: 'GuardsResult',
  initialState,
  reducers: {
    setGuards: (state, action) => {
      state.guards == action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGuards } = GuardsResultSlice.actions;

export default GuardsResultSlice.reducer;
