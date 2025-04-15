  const DrumMachine = () => {
  const [displayText, setDisplayText] = React.useState('');
  
  const drumPads = [
    {
      id: 'Heater-1',
      key: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'Heater-2',
      key: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'Heater-3',
      key: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'Heater-4',
      key: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Clap',
      key: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'Open-HH',
      key: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: 'Kick-n-Hat',
      key: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'Kick',
      key: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Closed-HH',
      key: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const playSound = (pad) => {
    const audio = document.getElementById(pad.key);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(pad.id);
  };

  const handleKeyPress = (e) => {
    const pad = drumPads.find(pad => pad.key === e.key.toUpperCase());
    if (pad) {
      playSound(pad);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div id="display" style={{
        fontSize: '24px',
        marginBottom: '30px',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        borderRadius: '5px'
      }}>
        {displayText}
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gap: '10px'
      }}>
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            id={pad.id}
            className="drum-pad"
            onClick={() => playSound(pad)}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4CAF50',
              color: 'white',
              fontSize: '24px',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              userSelect: 'none'
            }}
          >
            {pad.key}
            <audio
              id={pad.key}
              className="clip"
              src={pad.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(
  <DrumMachine />,
  document.getElementById('root')
);
