function ErrorMessage({error}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p style={{
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'grey',
        width: '30%'
      }}>{error}</p>
    </div>
  );
}

export default ErrorMessage;