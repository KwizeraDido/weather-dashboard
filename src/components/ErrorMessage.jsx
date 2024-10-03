function ErrorMessage() {
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
      }}>No data Found</p>
    </div>
  );
}

export default ErrorMessage;