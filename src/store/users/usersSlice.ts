import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './types';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  nameFilter: string;
  usernameFilter: string;
  emailFilter: string;
  phoneFilter: string;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  nameFilter: '',
  usernameFilter: '',
  emailFilter: '',
  phoneFilter: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data as User[];
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNameFilter(state, action: PayloadAction<string>) {
      state.nameFilter = action.payload;
    },
    setUsernameFilter(state, action: PayloadAction<string>) {
      state.usernameFilter = action.payload;
    },
    setEmailFilter(state, action: PayloadAction<string>) {
      state.emailFilter = action.payload;
    },
    setPhoneFilter(state, action: PayloadAction<string>) {
      state.phoneFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } = usersSlice.actions;

export default usersSlice.reducer;