import PageLoader from "./components/PageLoader/PageLoader";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import ScrollProgress
  from "./components/ScrollProgress/ScrollProgress";
import "./App.css";
import BackgroundParticles
  from "./components/BackgroundParticles/BackgroundParticles";
  import CursorGlow from "./components/CursorGlow/CursorGlow";
function App() {

  return (
    <>
      <PageLoader />
  <ScrollProgress />
  <BackgroundParticles />
        <CursorGlow />

      <Navbar />

      <main>

        <Home />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Contact />

      </main>

      <Footer />

    </>
  );
}

export default App;