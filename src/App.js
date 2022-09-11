
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SinglePost from './Components/SinglePost/SinglePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/:id" element={<SinglePost></SinglePost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
