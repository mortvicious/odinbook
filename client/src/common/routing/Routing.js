import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import PATH from './routes'
import Home from '../../pages/Home/Home'
import Signup from "../../pages/Signup/Signup"
// import Feed from "../../components/Feed/Feed"
// import Login from '../../pages/Login/Login'
// import user from '../store/User'
import PostPage from "../../pages/PostPage/PostPage";
import Communities from '../../pages/Communities/Communities'
import Friends from '../../pages/Friends/Friends'
import Messages from '../../pages/Messages/Messages'
import Settings from '../../pages/Settings/Settings'
import Search from '../../pages/Search/Search'
import UserPage from '../../pages/UserPage/UserPage'


const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path={PATH.ROOT} element={<Home/>}/>
        <Route path={PATH.SIGN_UP} element={<Signup/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/communities' element={<Communities/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/user-page' element={<UserPage/>}/>
        <Route path='/post/0' element={<PostPage/>}/>
      </Routes>
    </Router>
  )
}


export default Routing