// components/CountdownComponent.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  const offerEndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a message when the countdown completes
      return <span>Offer expired!</span>;
    } else {
      // Render the countdown
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div className="bg-yellow-300 text-black text-center py-2 top-0 z-50">
      <span>Offer expires in: </span>
      <Countdown date={offerEndDate} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;
