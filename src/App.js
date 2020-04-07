import React from 'react';
import './App.css';
import EventList from "./components/Event/EventList";
import AddEvent from "./containers/Event/AddEvent";

function App() {
  return (
    <div className="App">
      <AddEvent/>
      <EventList/>
    </div>
  );
}

export default App;
