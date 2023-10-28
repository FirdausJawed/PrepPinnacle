import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './card';
import Login from './login';
import MyCalendar from './calender';

function App() {
  const user = {
    name: 'Firdaus Jawed',
    bio: 'Student',
    location: 'Patna, Bihar, India',
    status: 'Knight',
    email: 'firdausjawed01@gmail.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH5hDDnbNvivR5amzhoou3ueiy1E7dursMQ&usqp=CAU',
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/card" element={<Card user={user} />} />
          <Route path="/MyCalendar" element={<MyCalendar/>} />
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;