import { createReducer, on, Action } from '@ngrx/store';
import { User } from 'src/app/core/users/users.model';
import * as UserActions from './user.actions';
const initialState: User[] = [];

const setUsersFunc = (state: User[], { users }): User[] => {
  return [...users];
};

const reducerFunction = createReducer(
  initialState,
  on(UserActions.setUsers, setUsersFunc),
  on(UserActions.setUsersAfterFetch, setUsersFunc)
);

export function usersReducer(state, action: Action) {
  return reducerFunction(state, action);
}
