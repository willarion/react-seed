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
import useUserInfo from './hooks/useUserInfo/useUserInfo';
import { NewMessageModal } from './components/NewMessageModal/NewMessageModal';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Submenu } from './components/Submenu/Submenu';
import { ContainerMain } from './components/ContainerMain/ContainerMain';

export const initialState: LoginState = { user: null, access: '' };

export const LoginContext = React.createContext<LoginState>(initialState);

export const App: React.FC = () => {
  const { userInfo, dispatchUserInfo } = useUserInfo(initialState);

  return (
    <>
      <LoginContext.Provider value={userInfo}>
        <Router>
          <Header dispatchUserInfo={dispatchUserInfo} />
          <Menu />
          <ContainerMain>
            <Submenu />
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
            <Switch>
              <Route exact path="/home/add">
                <NewMessageModal />
              </Route>
            </Switch>
          </ContainerMain>
        </Router>
      </LoginContext.Provider>
    </>
  );
};
