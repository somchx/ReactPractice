import HomePage from './pages/Home/HomePage'
import NotFound from './pages/Home/NotFound'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
