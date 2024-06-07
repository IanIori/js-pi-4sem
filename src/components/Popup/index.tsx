import React from 'react';
import './popup.css';

interface PopupProps {
  date: Date;
  appointments: string[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ date, appointments, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Compromissos em {date.toDateString()}</h2>
        <ul>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))
          ) : (
            <li>Sem compromissos para este dia.</li>
          )}
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
