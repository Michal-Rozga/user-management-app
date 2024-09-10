import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { RootState } from './store/store';
import { useAppDispatch } from './hooks/useAppDispatch';

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
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
