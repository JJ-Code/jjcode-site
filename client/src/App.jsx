import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HeaderTop from "./components/headerTop/HeaderTop";
import ResumeMain from "./components/pages/resume/ResumeMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {


  return (
    <div className="App">
      <Provider store={store}>
        <Router >
          <HeaderTop render={({ match }) => match} />
          {/* <HeaderTop /> */}
          <Switch>
            {/* <Route exact path='/home' component={HeaderTop} /> */}
            <Route exact path='/resume' render={({ match }) => <ResumeMain match={match} />} />

          </Switch>

        </Router>
      </Provider>
    </div>
  );

}



export default App;


/* <Header /> */
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jay Web
        </a>
      </header> */
