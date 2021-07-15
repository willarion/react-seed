import React from 'react';
import { LoginContext } from '../App';
import { UserProfile } from '../models/UserProfile';

const useUserProfile = (): UserProfile | null => {
  return React.useContext(LoginContext).user;
};

export default useUserProfile;
