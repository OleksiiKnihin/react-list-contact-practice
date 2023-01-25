import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  // Имя слайса
  name: 'users',
  // Начальное состояние редюсера слайса
  initialState: {
    users: [],
  },
  // Объект редюсеров
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
