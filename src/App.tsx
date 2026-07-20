import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Hero />

        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
