import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profiles from './components/Profiles/Profiles';

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
