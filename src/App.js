import './App.css';
import Rotas from './Rotas';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
