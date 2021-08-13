import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react';
import { useGoogleLogin } from '../../hooks/useGoogleLogin/useGoogleLogin';
import { DispatchUserInfo } from '../../models/DispatchUserInfo';
import useAuthToken from '../../hooks/useAuthToken/useAuthToken';
import styles from './GoogleBtns.module.css';
import classNames from 'classnames';

export const GoogleBtns: React.FC<DispatchUserInfo> = ({
  dispatchUserInfo,
}) => {
  const token = useAuthToken();
  const { googleLogin, googleLogout } = useGoogleLogin(dispatchUserInfo);

  return (
    <>
      {token ? (
        <GoogleLogout
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className={classNames(styles.customBtn)}
            >
              Log out
            </button>
          )}
          clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={googleLogout}
          onFailure={() => console.log('failure')}
        />
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className={classNames(styles.customBtn)}
            >
              Log in
            </button>
          )}
          clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleLogin}
          onFailure={(response) => console.log(response)}
          scope="https://mail.google.com"
          // todo: error handling not in console
          isSignedIn={true}
        />
      )}
    </>
  );
};
