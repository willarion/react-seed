import { UserProfile } from '../models/UserProfile';
import React from 'react';
import { LoginState } from '../pages/HomePage/HomePage';

function useUserInfo(initialState: LoginState) {
  function reducer(
    state: LoginState,
    action: { type: string; user: unknown },
  ): LoginState {
    switch (action.type) {
      case 'save':
        return { ...state, user: action.user as UserProfile | null };
      default:
        throw new Error();
    }
  }
  const [userInfo, dispatchUserInfo] = React.useReducer(reducer, initialState);

  return { userInfo, dispatchUserInfo };
}

export default useUserInfo;
