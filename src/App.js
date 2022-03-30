import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { getData } from './redux/data/greeting';
import Greeting from './components/greeting'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
