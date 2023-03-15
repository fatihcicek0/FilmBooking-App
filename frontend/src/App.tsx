import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './_App.scss';
import Header from './components/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import FilmDetail from './pages/detail/FilmDetail';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/film/:filmId' element={<PrivateRoute page={FilmDetail}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
