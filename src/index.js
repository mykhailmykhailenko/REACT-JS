import React from 'react';
import ReactDOM from 'react-dom/client';
import OurComponent from './OurComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement(OurComponent, {today: 'tuesday'})
  <div>
     <OurComponent today="monday"/>
     <OurComponent today="tuesday"/>
     <OurComponent today="wednesday"/>
  </div>

);

