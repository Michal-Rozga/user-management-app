import React from "react";
import { User } from "../features/users/types";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    return (
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
            {users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default UserTable;
