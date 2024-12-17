import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/portfolio.jsx';
import Home from './components/home.jsx';
import Navbar from './components/navbar.jsx';
import Blog from './components/blog.jsx';
import Contact from './components/contact.jsx';

function App() {
  return (
  <Router>  
      <div className="App">
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <Home />
                  <Contact />
                </div>
              } />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
    </div>
  </Router>
  );
}

export default App;
