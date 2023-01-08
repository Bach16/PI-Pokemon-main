import Home from "./components/home/Home"
import Create from './components/Form/Create'
import Details from "./components/Details"
import Landing from './components/Landing'
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/pokemon/:id' component={Details}/>
      <Route path="/create" component={Create}/>      
    </div>
  );
}

export default App;
