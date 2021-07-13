import { UserProfile } from '../models/UserProfile';
import React from 'react';
import { LoginState } from '../pages/HomePage/HomePage';

function useUserInfo(initialState: LoginState): {
  userInfo: LoginState;
  dispatchUserInfo: React.Dispatch<{
    type: string;
    user: unknown;
    access: string;
  }>;
} {
  function reducer(
    state: LoginState,
    action: { type: string; user: unknown; access: string },
  ): LoginState {
    switch (action.type) {
      case 'save':
        return {
          ...state,
          user: action.user as UserProfile | null,
          access: action.access,
        };
      case 'delete':
        return {
          ...state,
          user: action.user as UserProfile | null,
          access: '',
        };
      default:
        throw new Error();
    }
  }
  const [userInfo, dispatchUserInfo] = React.useReducer(reducer, initialState);

  return { userInfo, dispatchUserInfo };
}

export default useUserInfo;
