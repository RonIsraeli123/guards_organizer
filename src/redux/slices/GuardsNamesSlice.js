import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guardsNames: [],
};

export const GuardsNamesSlice = createSlice({
  name: 'GuardsNames',
  initialState,
  reducers: {
    addGuardName: (state, action) => {
      state.guardsNames.push(action.payload);
    },
    deleteGuardName: (state, action) => {
      state.guardsNames.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGuardName, deleteGuardName } = GuardsNamesSlice.actions;

export default GuardsNamesSlice.reducer;
