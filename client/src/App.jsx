import {useEffect} from 'react'
import MainWrapper from "./components/MainWrapper/MainWrapper";
import './styles/index.scss';
import Routing from "./common/routing/Routing";
import user from './common/store/User'

function App() {
  useEffect(() => {
    user.auth()
    // user.setUser('1')
    // user.isAuth()
    // user.logout( )
    // console.log(`run`)
    // console.log(user)
  }, [])
  return (
    <div className="App">
      <MainWrapper fullHeight={true}>
        <Routing/>
      </MainWrapper>
    </div>
  );
}

export default App;
