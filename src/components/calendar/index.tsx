import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import Popup from '../Popup';

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [appointments] = useState<{ [key: string]: string[] }>({
    '2024-05-28': ['Rota X', 'Rota Y'],
    // Adicione mais compromissos conforme necessário
  });

  const onClickDay = (value: Date | Date[]): void => {
    if (value instanceof Date) {
      setDate(value);
      setShowPopup(true);
    }
  };

  const getFormattedDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  return (
    
    <div className="calendar-container">
            
      <Calendar
        onClickDay={onClickDay}
        value={date as Date} // Convertemos para Date
        className="calendar"
      />
      {showPopup && (
        <Popup
          date={date as Date} // Convertemos para Date
          appointments={appointments[getFormattedDate(date as Date)] || []} // Convertemos para Date
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
