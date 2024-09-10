import React, { useState } from 'react';
import { User } from '../features/users/types';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredUsers = users.filter((user) => {
    const normalizedUserName = user.name.toLowerCase();
    const normalizedUsername = user.username.toLowerCase();
    const normalizedEmail = user.email.toLowerCase();
    const normalizedPhone = user.phone.toLowerCase();

    return (
      normalizedUserName.includes(normalizedSearchTerm) ||
      normalizedUsername.includes(normalizedSearchTerm) ||
      normalizedEmail.includes(normalizedSearchTerm) ||
      normalizedPhone.includes(normalizedSearchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, username, email, or phone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
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