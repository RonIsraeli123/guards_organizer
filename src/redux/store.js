import { configureStore } from '@reduxjs/toolkit';

import TimeFrameReducers from './slices/TimeFrameSlice';
import GuardsNamesReducers from './slices/GuardsNamesSlice';
import ShiftTimeReducers from './slices/ShiftTimeSlice';
import GuardsResultReducers from './slices/GuardsResultSlice';
import GuardsOrderReducers from './slices/GuardsOrder';

export const store = configureStore({
  reducer: {
    timeFrame: TimeFrameReducers,
    guardsNames: GuardsNamesReducers,
    shiftTime: ShiftTimeReducers,
    guardsResult: GuardsResultReducers,
    guardsOrder: GuardsOrderReducers,
  },
});
