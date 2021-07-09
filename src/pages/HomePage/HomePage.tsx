import React, { createContext } from 'react';
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

export const CurrentUserContext = createContext<LoginState>(initialState);

export const HomePage: React.FC = ({}) => {
  const [userInfo, dispatchUserInfo] = React.useReducer(reducer, initialState);

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
