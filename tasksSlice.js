import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'all'  // Options are 'all', 'completed', 'active'
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, removeTask, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
