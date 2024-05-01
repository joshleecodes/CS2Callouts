import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


//component imports
import Landing from './components/landing/Landing.tsx';

//font imports
import "@fontsource/lato/900.css";
import "@fontsource/lato/400.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Landing />
);
