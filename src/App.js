import './App.css';

import { MainForm } from './components/MainForm/MainForm';
import { ContactDetails } from './components/ContactDetails/ContactDetails';

const App = () => {
  return (
    <div className='all'>
      <MainForm />
      <ContactDetails />
    </div>
  );
};

export default App;
