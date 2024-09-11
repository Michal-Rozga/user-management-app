import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from './store/users/usersSlice';
import { RootState } from './store/store';
import UserTable from './components/UserTable';
import './styles/styles.scss';
import { useAppDispatch } from './hooks/useAppDispatch';

function App() {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="app-body">
      <h1 className="app-title">User Management Table</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <UserTable />
    </div>
  );
}

export default App;