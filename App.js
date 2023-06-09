import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/Login';
import KanbanBoard from './components/KanbanBoard';
import Dashboard from './components/Login';



function App() {
  return (
    <>
     {/* <Router>
      <Switch>
      <Route path="/"> */}
        <RegistrationForm />
        <LoginForm/>
        {/* <KanbanBoard/> */}
        {/* <Dashboard/> */}
       {/* </Route>
      </Switch>
   </Router> */}
</>
  );
}

export default App;
