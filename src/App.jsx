import './App.css';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JokesCard from './components/JokesCard';
import NavBar from './components/NavBar';

// Main code
const App = () => {
  return (
    <div>
      <NavBar />

      <JokesCard />
    </div>
  );
};

export default App;
