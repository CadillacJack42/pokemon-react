import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={'/'}>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
