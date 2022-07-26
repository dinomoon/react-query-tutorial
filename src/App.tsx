import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>SuperHeroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ SuperHeroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='super-heroes' element={<SuperHeroesPage />} />
          <Route path='rq-super-heroes' element={<RQSuperHeroesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
