import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './components/assignment1/Navbar/Navbar';
import Header from './components/assignment1/Header/Header';
import Hero from './components/assignment1/Hero/Hero';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Header/>
<Navbar/>
 <Hero/>
    </div>
);

