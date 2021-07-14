import React from 'react';
import { LoginContext } from '../pages/HomePage/HomePage';

function useAuthToken(): string {
  const { access } = React.useContext(LoginContext);
  return access;
}

export default useAuthToken;
