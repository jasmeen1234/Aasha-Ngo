import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Banner/>
      <Team/>
    </div>
  );
}

export default App;