import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profiles from './components/Profiles';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profiles />
    </div>
  );
}

export default App;
