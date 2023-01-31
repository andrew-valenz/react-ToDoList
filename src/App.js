import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import { useContext } from 'react';
import { UserContext } from './components/context/UserContext.js';
import Auth from './components/Auth.js';
import Tasks from './components/Tasks.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/tasks" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
