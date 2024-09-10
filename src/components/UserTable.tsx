import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { User } from '../features/users/types';
import { selectFilteredUsers } from '../features/users/selectors';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [usernameFilter, setUsernameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  const filteredUsers = useSelector((state: RootState) => 
    selectFilteredUsers(state, nameFilter, usernameFilter, emailFilter, phoneFilter)
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <input
                type="text"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </th>
            <th>
              Username
              <input
                type="text"
                value={usernameFilter}
                onChange={(e) => setUsernameFilter(e.target.value)}
              />
            </th>
            <th>
              Email
              <input
                type="text"
                value={emailFilter}
                onChange={(e) => setEmailFilter(e.target.value)}
              />
              </th>
            <th>
              Phone
              <input
                type="text"
                value={phoneFilter}
                onChange={(e) => setPhoneFilter(e.target.value)}
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
