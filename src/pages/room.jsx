import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import Consultations from '../second_page_components/Consultations';
import Maintenance from '../second_page_components/Maintenance';
import Roommap from '../second_page_components/Roommap';
import Occupantstable from '../second_page_components/Occupantstable';
 


function Room() {
    return (
        <div className='roominfo'>
            <div className='header'>
                <div className='headings'><FontAwesomeIcon icon={faAngleLeft} style={{fontSize: '50px'}}></FontAwesomeIcon><h2>Room 101</h2><h3>In Use</h3></div>
                <h1>Not Available for Booking</h1>
            </div>
            <div className='info'>
                <Occupantstable occupants ="6"/>
                <Roommap />
                <Maintenance />
                <Consultations />
            </div>
        </div>
    );
}

export default Room;