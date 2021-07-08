import React from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { ContainerMain } from '../../components/ContainerMain/ContainerMain';
import { Submenu } from '../../components/Submenu/Submenu';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export const HomePage: React.FC = ({}) => {
  //todo smth like that
  // function getUserProfile() {
  //   fetch(
  //     'https://gmail.googleapis.com/gmail/v1/users/anisimova.marina.n@gmail.com/profile',
  //     {
  //       headers: {
  //         authorization:
  //           'ya29.a0ARrdaM9hTLueKwhc0FFy5PTlGZh2dU_gzjWXiql76PsMVCc7SBg8bqUT4s1CAuX92Gc3CN3bwWH90WFZ0W5aICB8cr7rpvi2oVbgasd2-qvK774mzTZStVYVqu0Rb7YxGlVBsXcPC9W2__7CRZMtfNPYT3Lb',
  //       },
  //     },
  //   )
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(res.status);
  //     })
  //     .then((res) => console.log(res));
  // }
  const initialState = { userData: {}, isLoaded: false };

  function reducer(
    state: { userData: unknown; isLoaded: boolean },
    action: { type: string; user: unknown },
  ) {
    switch (action.type) {
      case 'save':
        return { userData: action.user, isLoaded: true };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const responseGoogle = (response: unknown) => {
    console.log(response);
    dispatch({ type: 'save', user: response });
  };

  return (
    <section>
      <GoogleLogin
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId="481156142014-iqr96oii4rvkk5og1eglruv6pdujkof4.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => console.log('success')}
        onFailure={() => console.log('failure')}
      />
      <Button styleType="primary" onClick={() => console.log(state)}>
        Ok!
      </Button>
      <Header />
      <Menu />
      <ContainerMain>
        <Submenu />
      </ContainerMain>
    </section>
  );
};
