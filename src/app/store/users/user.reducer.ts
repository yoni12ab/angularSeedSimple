import { createReducer, on, Action } from '@ngrx/store';
import { User } from 'src/app/core/users/users.model';
import * as UserActions from './user.actions';
const initialState: User[] = [];
//TODO-Store
const setUsersFunc = (state: User[], { users }): User[] => {
  return [...users];
};

const deleteUsersFunc = (state: User[], { user }): User[] => {
  const filteredUsers = state.filter(usr => usr.id !== user.id);
  return [...filteredUsers];
};

const reducerFunction = createReducer(
  initialState,
  on(UserActions.setUsers, setUsersFunc),
  on(UserActions.setUsersAfterFetch, setUsersFunc),
  on(UserActions.deleteUser,deleteUsersFunc),
);

export function usersReducer(state, action: Action) {
  return reducerFunction(state, action);
}
