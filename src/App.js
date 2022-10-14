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
      <infoModal />
      <footer />
      <Footer done="70"/>
    </div>
  );
}

export default App;
 