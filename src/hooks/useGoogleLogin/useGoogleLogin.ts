import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { DispatchUserInfo } from '../../models/DispatchUserInfo';

export const useGoogleLogin = (
  dispatchUserInfo: DispatchUserInfo['dispatchUserInfo'],
): {
  googleLogin: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => void;
  googleLogout: () => void;
} => {
  const googleLogin = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('profileObj' in response) {
      dispatchUserInfo({
        type: 'save',
        user: response.profileObj,
        access: response.accessToken,
      });
    }
  };

  const googleLogout = () => {
    dispatchUserInfo({ type: 'delete', user: null, access: '' });
  };

  return { googleLogin, googleLogout };
};
