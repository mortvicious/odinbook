import MainWrapper from "./components/MainWrapper/MainWrapper";
import './styles/index.scss';
import Routing from "./common/routing/Routing";

function App() {
  return (
    <div className="App">
      <MainWrapper fullHeight={true}>
        <Routing/>
      </MainWrapper>
    </div>
  );
}

export default App;
