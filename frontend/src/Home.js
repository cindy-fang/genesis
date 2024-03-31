import React from 'react';
import './App.css'; // Import CSS file for styling
import Welcome from './Welcome'; // Import WelcomePage component
import Quiz from './Quiz'; // Import KahootQuestion component

function App() {
  const choices = ['Condo interior', 'Condo balcony', 'Company office', 'Factory interior', 'Building Rooftop'];

  return (
    <div className="App">
      <Welcome />
      <Quiz question="Where is your garden?" choices={choices} />
    </div>
    );
}

export default App;
