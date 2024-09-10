import { createSelector } from "reselect";
import { RootState } from "../../store/store";
import { User } from "./types";

const selectUsers = (state: RootState) => state.users.users;

const selectedFilters = (_: RootState, nameFilter: string, usernameFilter: string, emailFilter: string, phoneFilter: string) => ({
    nameFilter,
    usernameFilter,
    emailFilter,
    phoneFilter,
});

export const selectFilteredUsers = createSelector(
    [selectUsers, selectedFilters],
    (users: User[], filters) => {
        return users.filter(user =>
            user.name.toLowerCase().includes(filters.nameFilter.toLowerCase()) &&
            user.username.toLowerCase().includes(filters.usernameFilter.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.emailFilter.toLowerCase()) &&
            user.phone.toLowerCase().includes(filters.phoneFilter.toLowerCase())
        );
    }
);