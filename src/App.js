import "./App.css";
import About from "./components/PortfolioComponent/About/About";
import Footer from "./components/PortfolioComponent/Footer/Footer";
import Profile from "./components/PortfolioComponent/Home/Profile";
import Projects from "./components/PortfolioComponent/Projects/Projects";

function App() {
  return (
    <div className="App">
      <h1>
        <Profile />
        <About />
        <Projects />
        <Footer />
      </h1>
    </div>
  );
}

export default App;
