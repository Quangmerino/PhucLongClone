import Header from "./pages/Layouts/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./pages/Layouts/Footer";
import HomePage from "./pages/Layouts/Home";
import CoffeePage from "./pages/Layouts/Coffee";

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<CoffeePage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
