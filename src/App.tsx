import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import './styles/index.css';
// import { ModalContext, modalActivity } from './context/ModalContext';

export const App: React.FC = () => {
  // const [isModalVisible, setIsModalVisible] = React.useState('active');
  //
  // function toggleModal() {
  //   setIsModalVisible(!isModalVisible);
  // }
  // console.log(modalActivity);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          {/*<ModalContext.Provider value={modalActivity[isModalVisible]}>*/}
          {/*<div className="testProject">*/}
          <HomePage
          // toggleHandler={toggleModal}
          // isModalVisible={isModalVisible}
          />
          {/*</div>*/}
          {/*</ModalContext.Provider>*/}
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  );
};
