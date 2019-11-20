import { createAction, props } from '@ngrx/store';
import { User } from '../../core/users/users.model';

export const setUsers = createAction(
  '[users] set users',
  props<{ users: User[] }>()
);

export const setUsersAfterFetch = createAction(
  '[users] set users after fetch',
  props<{ users: User[] }>()
);
