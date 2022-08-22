import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shiftTime: '',
  timeUnit: 'hour',
};

export const ShiftTimeSlice = createSlice({
  name: 'ShiftTime',
  initialState,
  reducers: {
    setShiftTime: (state, action) => {
      state.shiftTime = action.payload;
    },
    setTimeUnit: (state, action) => {
      state.timeUnit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShiftTime, setTimeUnit } = ShiftTimeSlice.actions;

export default ShiftTimeSlice.reducer;
