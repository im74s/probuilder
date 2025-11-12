export const SplashScreen = () => {
  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FF0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <h1 style={{ 
        color: '#FFFFFF', 
        fontSize: '32px',
        fontWeight: 'bold'
      }}>
        TEST - Can you see this?
      </h1>
    </div>
  );
};
