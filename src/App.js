import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from './pages/home/Home'
import Aspirant from './pages/aspirant/Aspirant'
import About from './pages/about/About'
import Polls from './pages/polls/Polls'

function App() {
  return (
    <Router>
      <Route exact path="/" component={() => (<Redirect to='/home' />)} />
      <Route exact path="/home" component={Home} />
      {/* <Route path='/' exact component={Home} /> */}
      <Route path='/about' component={About} />
      <Route path='/aspirant' component={Aspirant} />
      <Route path='/polls' component={Polls} />
    </Router>
  );
}

export default App;
