import HomePage from './pages/Home/HomePage'
import AboutUs from './pages/About/AboutUs'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>

  );
}

export default App;
