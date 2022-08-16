import { createSlice } from '@reduxjs/toolkit';
import { startGuardTime, endGuardTime } from '../../config/time/timeSetting';

const initialState = {
  startTime: startGuardTime,
  endTime: endGuardTime,
};

export const TimeFrameSlice = createSlice({
  name: 'TimeFrame',
  initialState,
  reducers: {
    setStartTimes: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTimes: (state, action) => {
      state.endTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStartTimes, setEndTimes } = TimeFrameSlice.actions;

export default TimeFrameSlice.reducer;
