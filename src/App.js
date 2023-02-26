import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="App">
          <Header />
          <Footer />
      </div>
    </>
  );
}

export default App;
