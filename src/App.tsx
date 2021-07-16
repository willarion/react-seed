import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage, LoginState } from './pages/HomePage/HomePage';
import './styles/index.css';
import { MessagePage } from './pages/MessagePage/MessagePage';
import useUserInfo from './hooks/useUserInfo';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';

const initialState: LoginState = { user: null, access: '' };

export const LoginContext = React.createContext<LoginState>(initialState);

export const App: React.FC = () => {
  const { userInfo, dispatchUserInfo } = useUserInfo(initialState);

  const responseGoogle = (
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

  return (
    <>
      <GoogleLogin
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={(response) => console.log(response)}
        // todo: error handling not in console
      />
      <GoogleLogout
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => {
          console.log('success');
          dispatchUserInfo({ type: 'delete', user: null, access: '' });
        }}
        onFailure={() => console.log('failure')}
      />
      <LoginContext.Provider value={userInfo}>
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            {/*todo make redirect from message to / if user isn't logged in*/}
            <Route path="/message">
              <MessagePage />
            </Route>
            <Redirect from="*" to="/home" />
          </Switch>
        </Router>
      </LoginContext.Provider>
    </>
  );
};
