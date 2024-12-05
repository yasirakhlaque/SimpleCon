import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Adjusted path for Home
import Articles from './Components/Articles/Articles'; // Adjusted path for Articles
import ConstitutionBodies from './Components/ConstitutionBodies';
import CoreFeatures from './Components/Core Features/Core-features';
import Thought from './Components/Thought';

function App() {
  return (
    <Router basename='/SimpleCon/'>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <CoreFeatures />
          </>
        } /> {/* Home Page */}
        <Route path="/articles" element={<Articles />} /> {/* Articles Page */}
        <Route path="/thought" element={<Thought />} />
        <Route path="/core-features" element={<CoreFeatures />} />
        <Route path="/constitution-bodies" element={<ConstitutionBodies />} />
      </Routes>
    </Router>
  );
}

export default App;
