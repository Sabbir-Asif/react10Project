import React, { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;
