import React, { useState } from 'react';

import { MainForm, GuardsResult, ContactDetails } from './components/index';

import './App.css';

export const App = () => {
  // eslint-disable-next-line no-lone-blocks
  {
    /* TODO: change it to redux way */
  }
  const [guards, setGuards] = useState([]);

  return (
    <div className='all'>
      <MainForm setGuards={setGuards} />
      <GuardsResult guards={guards} setGuards={setGuards} />
      <ContactDetails />
    </div>
  );
};
