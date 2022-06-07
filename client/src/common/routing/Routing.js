import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import PATH from './routes'
import Home from '../../pages/Home/Home'
import Signup from "../../pages/Signup/Signup"

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path={PATH.HOME} element={<Home/>}/>
        <Route path={PATH.SIGN_UP} element={<Signup/>}/>
      </Routes>
    </Router>
  )
}
  

export default Routing