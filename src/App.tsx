import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <section id="about">About</section>
        <Skills />
        <section id="projects">Projects</section>
        <section id="contact">Contact</section>
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default App;
