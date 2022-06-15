import { Route, Routes } from 'react-router-dom';
import './App.css';
import Business from './components/Business';
import Home from './components/Home';
import Review from './components/Review';

function App() {
  return (
    <div>
      {/* <h1> Hellow </h1> */}

      <Routes>

        <Route path='/' element={<Home> </Home>}>
          <Route path='/business' element={<Business> </Business>}> </Route>
          <Route path='/review' element={<Review> </Review>}> </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
