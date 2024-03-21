import './App.css';
import ColorChangingDiv from './components/Colorchangingdiv';
import DivColorChnage from './components/div/divColorChane';
import UseMemo from './components/useMemo/useMemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <ColorChangingDiv/>
      <DivColorChnage/>
      <UseMemo/>

      </header>
    </div>
  );
}

export default App;
