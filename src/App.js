import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import login from './components/login';
import home from './components/home';
import Homebar from './components/Homebar';
import apphome from './components/apphome';
import Adminpg from './components/Adminmainpg';
import Profile from './components/profile';
import Dashboardpg from './components/Dashboard';
import Weekend from './components/Weekend';
import Reguser from './components/Registereduser';
import Past from './components/PastEvents';
import Events from './components/EventsReg';
import Leader from './components/Leader';
import Addevents from './components/Addevents';
import Certificates from './components/Certificates';
import Editevents from './components/Editevents';
import Snackbar from './components/Snackbar';
function App() {
  return (
    <Router>
    <Switch>
	  <Route exact path='/Register'  component={Register}/>
		<Route exact path='/' component={login} />
    <Route exact path='/home'  component={home}/>
    <Route exact path='/Homebar'  component={Homebar}/>
    <Route exact path='/apphome'  component={apphome}/>
    <Route exact path='/Adminmainpg'  component={Adminpg}/>
    <Route exact path='/profile'  component={Profile}/>
    
    <Route exact path='/Weekend'  component={Weekend}/>
    <Route exact path='/Registereduser'  component={Reguser}/>
    <Route exact path='/PastEvents'  component={Past}/>
    <Route exact path='/EventsRegistered'  component={Events}/>
    <Route exact path='/Leader'  component={Leader}/>
    <Route exact path='/Dashboard'  component={Dashboardpg}/>
    <Route exact path='/Addevents' component={Addevents}/>
    <Route exact path='/Certificates' component={Certificates}/>
    <Route exact path='/Editevents' component={Editevents}/>
    <Route exact path='/Snackbar' component={Snackbar}/>
   </Switch>
   </Router>
     )
  }

export default App;