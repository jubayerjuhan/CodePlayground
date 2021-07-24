import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import LoadUsers from "./Components/LoadUsers";
import NotFoundPage from "./Components/NotFoundPage";
import UserDetail from "./Components/UserDetail";
import ToggleBtn from './ToggleBtn.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path ="/">
            <LoadUsers></LoadUsers>
          </Route>
          
          <Route path ="/user/:id">
            <UserDetail></UserDetail>
          </Route>

          <Route path ="*">
            <NotFoundPage></NotFoundPage>
          </Route>

          <Route path ="/toggle">
            <ToggleBtn/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
