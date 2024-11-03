import './App.css'
import Fetch from './assets/Components/Fetching'
import Fetch2 from './assets/Components/Fetching2'
import Fetch3 from './assets/Components/Fetching3'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {


  return (
    <Router>
    <nav className="navbar">
        <ul>
            <li><NavLink exact to="/" activeClassName="active">Everything</NavLink></li>
            <li><NavLink to="/TopHeadline" activeClassName="active">Top Headline</NavLink></li>
            <li><NavLink to="/Sources" activeClassName="active">Sources</NavLink></li>
        </ul>
    </nav>

    <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/TopHeadline" element={<Fetch2 />} />
        <Route path="/Sources" element={<Fetch3 />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
    </Routes>
</Router>
 
  )
}

export default App
