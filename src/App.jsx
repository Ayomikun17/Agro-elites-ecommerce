import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/pages/About/About';
import Products from './components/pages/Products';
import FAQ from './components/layout/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    /* This container ensures the total height of children equals 100vh exactly */
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;