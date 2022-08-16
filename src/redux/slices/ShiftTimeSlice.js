import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shiftTime: 1,
  type: 'hour',
};

export const ShiftTimeSlice = createSlice({
  name: 'ShiftTime',
  initialState,
  reducers: {
    setShiftTime: (state, action) => {
      state.shiftTime == action.payload;
    },
    setType: (state, action) => {
      state.type == action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShiftTime, setType } = ShiftTimeSlice.actions;

export default ShiftTimeSlice.reducer;
