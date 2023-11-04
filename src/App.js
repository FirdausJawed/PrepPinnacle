// import React from 'react';
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement } from "chart.js";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


// import './App.css';
// import Card from './card';
// import Login from './login';
// import MyCalendar from './calender';
// import ModuleStatus from './moduleProgress';
// import StatisticData from './productivity';
// import App1 from './todolist/App1';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement);

// function App() {
  // const user = {
  //   name: 'Firdaus Jawed',
  //   bio: 'Student',
  //   location: 'Patna, Bihar, India',
  //   status: 'Knight',
  //   email: 'firdausjawed01@gmail.com',
  //   profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH5hDDnbNvivR5amzhoou3ueiy1E7dursMQ&usqp=CAU',
  // };

//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/card" element={<Card user={user} />} />
//           <Route path="/MyCalendar" element={<MyCalendar />} />
//           <Route path="/moduleProgress" element={<ModuleStatus />} />
//           <Route path="/productivity" element={<StatisticData />} />
//           <Route path="/todolist" element={<App1 />} />
//         </Routes>
//       </BrowserRouter>

//     </div>

//   );
// }

// export default App;

import { CssBaseline, GlobalStyles } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement } from "chart.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement);

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none"
    }
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;