import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Insectarium from "./pages/Insectarium/Insectarium";
import InsectDetail from "./pages/InsectDetail/InsectDetail";
import About from "./pages/About/About";

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Insetario" element={<Insectarium />} />
          <Route path="/Inseto/:id" element={<InsectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
