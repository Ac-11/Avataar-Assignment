import './App.css';
// import Corousal from './components/Corousal/Corousal';
// import Nav from './components/Nav';
import Navbar from './components/Navbar';
import CardSlider from './components/card/CardSlider';

function App() {
  const images = [
    'https://source.unsplash.com/N04FIfHhv_k',
    'https://source.unsplash.com/GjUSnrVpt_0',
    'https://source.unsplash.com/U3aF7hgUSrk',
    'https://source.unsplash.com/NH1d0xX6Ldk',
    'https://source.unsplash.com/73pyV0JJOmE',
  ];
  return (
    <div className="App1">
    <Navbar></Navbar>
    <div>
    <CardSlider images={images}></CardSlider>
    </div>
    </div>
  );
}

export default App;
