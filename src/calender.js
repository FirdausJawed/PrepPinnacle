import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function App() {
      const [date, setDate] = useState(new Date());

      return (
            <div className='cal'>
                  <h1 className='text-center'>Today</h1>
                  <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date} />
                  </div>
            </div>
      );
}

export default App;