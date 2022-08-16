import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEvenTime: false,
  isRandomPalces: false,
};

export const GuardsOrder = createSlice({
  name: 'GuardsOrder',
  initialState,
  reducers: {
    setIsEvenTime: (state, action) => {
      state.isEvenTime == action.payload;
    },
    setIsRandomPalces: (state, action) => {
      state.isRandomPalces == action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsEvenTime, setIsRandomPalces } = GuardsOrder.actions;

export default GuardsOrder.reducer;
