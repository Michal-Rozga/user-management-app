import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers } from '../store/users/selectors';
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from '../store/users/usersSlice';

const UserTable: React.FC = () => {
  const dispatch = useDispatch();

  const filteredUsers = useSelector(selectFilteredUsers);

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
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
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
