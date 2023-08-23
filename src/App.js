// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index/>} />
            <Route path="/products/:id" element={<Show />} />
            <Route path="/products/new" element={<New />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
