import './App.css';
import './components/Background/Background';
import "./components/NavBar/NavBar";
import Background from './components/Background/Background';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
    </div>
  );
}

export default App;
