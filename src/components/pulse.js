const Pulse = () => {
    const data = [
      { time: '10:00 AM', value: 72, safe: 'Yes' },
      { time: '12:00 PM', value: 85, safe: 'Yes' },
      { time: '2:00 PM', value: 110, safe: 'No' },
      { time: '10:00 AM', value: 72, safe: 'Yes' },
      { time: '12:00 PM', value: 85, safe: 'Yes' },
      { time: '2:00 PM', value: 110, safe: 'No' }, { time: '10:00 AM', value: 72, safe: 'Yes' },
      { time: '12:00 PM', value: 85, safe: 'Yes' },
      { time: '2:00 PM', value: 110, safe: 'No' }, { time: '10:00 AM', value: 72, safe: 'Yes' },
      { time: '12:00 PM', value: 85, safe: 'Yes' },
      { time: '2:00 PM', value: 110, safe: 'No' }, { time: '10:00 AM', value: 72, safe: 'Yes' },
      { time: '12:00 PM', value: 85, safe: 'Yes' },
      { time: '2:00 PM', value: 110, safe: 'No' },
    ];
  
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
        width: "100dvw",
       
      }}>
        <div style={{
          width: '80%',
          maxHeight: '70vh',
          overflow: 'auto',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px'
          }}>
            <thead style={{ position: 'sticky', top: 0, backgroundColor: '#f2f2f2', zIndex: 1 }}>
              <tr>
                <th style={headerStyle}>Measured At</th>
                <th style={headerStyle}>Pulse Value</th>
                <th style={headerStyle}>Safe?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff' }}>
                  <td style={cellStyle}>{entry.time}</td>
                  <td style={cellStyle}>{entry.value}</td>
                  <td style={cellStyle}>{entry.safe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  const headerStyle = {
    padding: '12px',
    borderBottom: '2px solid #ddd',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    
  };
  
  const cellStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee'
  };
  
  export default Pulse;
  