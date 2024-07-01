
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Team from './components/team/Team';

import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Banner/>
      <Team/>
      <Form/>
      <Footer/>
      {/* home about our program news getinvolved */}
    </div>
  );
}

export default App;