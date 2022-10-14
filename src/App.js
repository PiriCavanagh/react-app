import Header from './components/Header';
import Levelmenu from './components/levelmenu';
import Floorplanmap from './components/floorplanmap';
import Footer from './components/footer';
import InfoModal from './components/infoModal';




function App() {
  return (
    <div className='container'>
      <Header />
      <Levelmenu />
      <Floorplanmap />
      <InfoModal />
      <footer />
    </div>
  );
}

export default App;
 