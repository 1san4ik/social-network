import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profiles from './components/Profiles/Profiles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/dialogs' element={<Dialog />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
