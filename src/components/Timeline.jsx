const Timeline = () => {
  const events = [
    { time: '14:00', description: 'Wedding Talk' },
    { time: '15:00', description: 'Reception' },
    { time: '18:00', description: 'The end' },
  ];

  return (
    <div className='timeline font-title'>
      {events.map((event, index) => (
        <div className='timeline-event' key={index}>
          <div className='timeline-dot'></div>
          {index !== events.length - 1 && <div className='timeline-line'></div>}
          <div className='timeline-time'>{event.time}</div>
          <div className='timeline-description'>{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
