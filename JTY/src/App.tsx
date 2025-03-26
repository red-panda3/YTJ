import React from 'react';
import JsonToYamlConverter from './component/JsonInput';


const App: React.FC = () => {
  return (
    <div style={{
      height: '100vh', // Use viewport height for full screen
      border: '2px solid black',
      backgroundColor: 'black',
      width: '100vw', // Use viewport width for full width
      display: 'flex',
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
      padding: '20px', // Add some padding
      boxSizing: 'border-box', 
      gap: '50px'
    }}>
      <JsonToYamlConverter></JsonToYamlConverter>
    </div>
  );
}

export default App;