import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Blog from './Blog';
import Create from './Create';
import NotFound from './components/NotFound';

function App() {
  
  return (
    <div className="App">
     <Navbar />
     <div className="content">
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/blogs/:id' element={<Blog/>}></Route>
       <Route path='/create' element={<Create/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     </div>
    </div>
  );
}

export default App;
