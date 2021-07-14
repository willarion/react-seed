import React from 'react';
import { LoginContext } from '../App';

function useAuthToken(): string {
  const { access } = React.useContext(LoginContext);
  return access;
}

export default useAuthToken;
