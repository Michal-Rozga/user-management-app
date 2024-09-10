import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { RootState } from './store/store';
import { useAppDispatch } from './hooks/useAppDispatch';
import UserTable from './components/UserTable';
import './styles/appStyle.css';

function App() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Management Table</h1>
      <UserTable users={users} />
    </div>
  );
}

export default App;
