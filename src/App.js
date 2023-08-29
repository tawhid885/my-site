import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import PostDetails from './Pages/Home/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home></Home>}/>
          <Route path="/post/:id" element = {<PostDetails></PostDetails>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
