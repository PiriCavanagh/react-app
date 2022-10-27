import React from 'react';
import '../index.css';
import Header from '../components/Header'
import Levelmenu from '../components/levelmenu'
import Floorplanmap from '../components/floorplanmap'
import Footer from '../components/footer'

function Home() {
    return (
        <div className='container'>
            <Header />
            <Levelmenu />
            <Floorplanmap />
            <Footer />
        </div>
    );
}

export default Home;