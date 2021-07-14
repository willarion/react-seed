import React from 'react';
import { LoginContext } from '../App';
import { UserProfile } from '../models/UserProfile';

const useUserProfile = (): UserProfile | null => {
  const { user } = React.useContext(LoginContext);
  return user;
};

export default useUserProfile;
