// App.js
import React from 'react';
import './App.css';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';

function App() {
  const user = {
    name: 'Firdaus Jawed',
    bio: 'Student',
    location: 'Patna, Bihar, India',
    email: 'firdausjawed01@gmail.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH5hDDnbNvivR5amzhoou3ueiy1E7dursMQ&usqp=CAU',
  };

  return (
    <div className="App">
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
    </div>
  );
}

export default App;
