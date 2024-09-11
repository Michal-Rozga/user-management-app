import { createSelector } from "reselect";
import { RootState } from "../store";

const selectUsers = (state: RootState) => state.users.users;
const selectNameFilter = (state: RootState) => state.users.nameFilter;
const selectUsernameFilter = (state: RootState) => state.users.usernameFilter;
const selectEmailFilter = (state: RootState) => state.users.emailFilter;
const selectPhoneFilter = (state: RootState) => state.users.phoneFilter;

export const selectFilteredUsers = createSelector(
    [selectUsers, selectNameFilter, selectUsernameFilter, selectEmailFilter, selectPhoneFilter],
    (users, nameFilter, usernameFilter, emailFilter, phoneFilter) => {
        return users.filter((user) => {
            return (
                user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
                user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
                user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
                user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
            );
        });
    }
);