import React from 'react';
import { LoginContext } from '../../App';

function useAuthToken(): string {
  return React.useContext(LoginContext).access;
}

export default useAuthToken;
