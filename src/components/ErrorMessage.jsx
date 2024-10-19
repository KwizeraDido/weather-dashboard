function ErrorMessage({message}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p style={{
        color: '#4CC9FE',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '30%'
      }}>{message}</p>
    </div>
  );
}

export default ErrorMessage;