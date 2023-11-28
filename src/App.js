import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Components/Home/index'
import CourseItemDetails from './Components/CourseItemDetails/index'
import './App.css'
import NotFound from './Components/NotFound/index'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)
export default App
