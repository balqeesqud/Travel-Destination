import Home from './components/home/Home';
import data from './data/db.json';
import Tours from './components/tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home tour={data} />} />
        <Route path="tours" element={<Tours data={data} />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}
export default App;
