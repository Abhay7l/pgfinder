import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/Home/home';
import Hotel from './pages/Hotel/hotel';
// import List from './pages/List/list.jsx';
import List from './pages/List/list';
import Footer from './components/footer/footer.component';
import Login from './pages/Login/login.jsx';
import Register from './pages/Register/register';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = '/' index element={<Home/>}/>
        <Route path = '/hotels'  element={<List/>}/>
        <Route path = '/hotels/:id'  element={<Hotel/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
      </Routes>
      <Footer />  
    </BrowserRouter>
  )
}

export default App;
