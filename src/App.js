import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';
function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/html' element={<Html/>}/>
  <Route path='/css' element={<Css/>}/>
  <Route path='/javascript' element={<Javascript/>}/>
</Routes>
</>

  );
}

export default App;
