import './App.css';
import '../src/style/style.css';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Top from './sections/Top';
import Insurance from './sections/Insurance';
import ChoosingInsurance from './sections/ChoosingInsurance';
import Claims from './sections/Claims';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Top />
      <Insurance />
      <ChoosingInsurance />
      <Claims />
      <Footer />
    </div>
  );
}

export default App;
