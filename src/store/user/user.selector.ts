import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const SelectUserReducer = (state :RootState): UserState =>state.user;
export const selectCurrentUser = createSelector(SelectUserReducer,(user) => user.currentUser);
