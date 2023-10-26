import React from 'react';
import './App.css';
import Card from './card';

function App() {
  const user = {
    name: 'Firdaus Jawed',
    bio: 'Student',
    location: 'Patna, Bihar, India',
    status:'Knight',
    email: 'firdausjawed01@gmail.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH5hDDnbNvivR5amzhoou3ueiy1E7dursMQ&usqp=CAU',
  };

  return (
    <div className="App">
      <div className='card'>
        <Card user={user} />
      </div>
      
    </div>

    

  );
}

export default App;
