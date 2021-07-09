import React from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { ContainerMain } from '../../components/ContainerMain/ContainerMain';
import { Submenu } from '../../components/Submenu/Submenu';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { UserProfile } from '../../models/UserProfile';

export interface LoginState {
  user: UserProfile | null;
}

const initialState: LoginState = { user: null };

export const CurrentUserContext = React.createContext<LoginState>(initialState);

export const HomePage: React.FC = ({}) => {
  const { userInfo, dispatchUserInfo } = useUserInfo(initialState);

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    console.log(response);
    if ('profileObj' in response) {
      dispatchUserInfo({ type: 'save', user: response.profileObj });
    }
  };

  return (
    <section>
      <GoogleLogin
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={(response) => console.log(response)}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => console.log('success')}
        onFailure={() => console.log('failure')}
      />
      <Button styleType="primary" onClick={() => console.log(userInfo)}>
        Ok!
      </Button>
      <CurrentUserContext.Provider value={userInfo}>
        <Header />
        <Menu />
        <ContainerMain>
          <Submenu />
        </ContainerMain>
      </CurrentUserContext.Provider>
    </section>
  );
};
