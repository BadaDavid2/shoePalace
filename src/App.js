import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Body from './Pages/Home/Body';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Cart from './Pages/Cart/Cart';
import Admin from './Components/Admin';
import Details from './Components/Details';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='signIn' element={<SignIn/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='detail-page/:id' element={<Details/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
