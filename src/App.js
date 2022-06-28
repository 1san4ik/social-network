import './App.css';
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
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
