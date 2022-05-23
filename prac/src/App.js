
import './App.css';
import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom"
import Instruments from './Instruments';
import InstrumentSinglePage from './InstrumentSinglePage';
import InstrumentCreate from './InstrumentCreate';

function App() {
  return (
    <BrowserRouter>
     <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='collapse navbar-collapse' id="navbarNav">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to={'/'} className={({isActive})=>"nav-link"+(isActive?"active":"")} end>
              <span className='nav-link'>Hangszerek</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/uj-hangszer'} className={({isActive})=>"nav-link"+(isActive?"active":"")} end>
              <span className='nav-link'>Új hangszer</span>
            </NavLink>
          </li>
        </ul>
      </div>
     </nav>
     <Routes>
      <Route path='/' exact element={<Instruments/>}></Route>
      <Route path='/hangszer/:hangszerId'  element={<InstrumentSinglePage/>}></Route>
      <Route path='/uj-hangszer'  element={<InstrumentCreate/>}>Új Hangszer létrehozó oldal</Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
