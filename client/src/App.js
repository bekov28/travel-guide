import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBook from "./pages/UpdateBook";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/add" element={<AddBook />} />
                  <Route path="/update/:id" element={<UpdateBook />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
