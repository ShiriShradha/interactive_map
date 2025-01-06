// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const MemoryMap = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const memories = [
    {
      id: 1,
      title: "First Meeting",
      date: "2023-02-14",
      location: "Coffee Shop",
      story: "The day we first met over a cup of coffee...",
      type: "milestone",
      x: 20,
      y: 30
    },
    {
      id: 2,
      title: "Beach Trip",
      date: "2023-06-20",
      location: "Sunset Beach",
      story: "That amazing sunset we watched together...",
      type: "adventure",
      x: 60,
      y: 50
    },
    {
      id: 3,
      title: "First Dance",
      date: "2023-12-31",
      location: "New Year's Party",
      story: "Dancing under the stars as the year ended...",
      type: "romantic",
      x: 40,
      y: 70
    }
  ];

  return (
    <div style={{ width: '100%', height: '100vh', padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Memory Map
        </Typography>

        <div style={{ position: 'relative', width: '100%', height: '600px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {memories.map((memory) => (
            <div
              key={memory.id}
              style={{
                position: 'absolute',
                left: `${memory.x}%`,
                top: `${memory.y}%`,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedMemory(memory)}
            >
              <LocationOnIcon 
                style={{ 
                  color: memory.type === 'milestone' ? '#f44336' : 
                         memory.type === 'adventure' ? '#2196f3' : 
                         '#e91e63'
                }} 
              />
            </div>
          ))}

          {selectedMemory && (
            <Card style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '300px' }}>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FavoriteIcon color="error" style={{ marginRight: '0.5rem' }} />
                  <Typography variant="h6">{selectedMemory.title}</Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <CalendarTodayIcon fontSize="small" style={{ marginRight: '0.5rem' }} />
                  <Typography variant="body2" color="textSecondary">
                    {selectedMemory.date}
                  </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <LocationOnIcon fontSize="small" style={{ marginRight: '0.5rem' }} />
                  <Typography variant="body2" color="textSecondary">
                    {selectedMemory.location}
                  </Typography>
                </div>
                <Typography variant="body2">
                  {selectedMemory.story}
                </Typography>
              </CardContent>
            </Card>
          )}
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {['milestone', 'adventure', 'romantic'].map(type => (
            <div key={type} style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ 
                color: type === 'milestone' ? '#f44336' : 
                       type === 'adventure' ? '#2196f3' : 
                       '#e91e63',
                marginRight: '0.25rem'
              }} />
              <Typography variant="body2" style={{ textTransform: 'capitalize' }}>
                {type}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryMap;