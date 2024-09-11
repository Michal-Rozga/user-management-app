import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { User } from '../store/users/types';
import { selectFilteredUsers } from '../store/users/selectors';
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from '../store/users/usersSlice';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const dispatch = useDispatch();

  const filteredUsers = useSelector((state: RootState) => selectFilteredUsers(state));

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>
              Name
              <input
                type="text"
                className="filter-input"
                onChange={(e) => dispatch(setNameFilter(e.target.value))}
              />
            </th>
            <th>
              Username
              <input
                type="text"
                className="filter-input"
                onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
              />
            </th>
            <th>
              Email
              <input
                type="text"
                className="filter-input"
                onChange={(e) => dispatch(setEmailFilter(e.target.value))}
              />
              </th>
            <th>
              Phone
              <input
                type="text"
                className="filter-input"
                onChange={(e) => dispatch(setPhoneFilter(e.target.value))}
              />
              </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td data-label="Name" >{user.name}</td>
                <td data-label="Username" >{user.username}</td>
                <td data-label="Email" >{user.email}</td>
                <td data-label="Phone" >{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No matching users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
