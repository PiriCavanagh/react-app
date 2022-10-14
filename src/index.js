import Header from './components/Header';
import Levelmenu from './components/levelmenu';
import Floorplanmap from './components/floorplanmap';
import Footer from './components/footer';
import InfoModal from './components/infoModal';
import Main from './components/Main';





function Index() {
  return (
    <div className='container'>
      <Header />
      <Levelmenu />
      <Floorplanmap />
    </div>
  );
}

export default Index;
 