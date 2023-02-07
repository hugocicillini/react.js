import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List'
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <AnotherComponent></AnotherComponent>
      <Images></Images>
      <Hooks></Hooks>
      <List></List>
      <RenderCond x={5} y={10}></RenderCond>
      <Fragment></Fragment>
      <Container>
        <h1> Este é o filho container</h1>
      </Container>
    </div>
  );
}

export default App;
