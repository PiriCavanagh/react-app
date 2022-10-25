const ball = {
    position: 'absolute',
    borderRadius: '20px',
    top: '20',
    left: '20',
    width: '30px',
    height: '30px',
    background: 'rgba(255, 0, 0, .5)',
    boxShadow: '2px 2px 10px rgba(255, 0, 0, .5)',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const innerball = {
    borderRadius: '20px',
    width: '20px',
    height: '20px',
    background: 'red',

};
const Roommap = () => {
    return (
        <div className='roommap'>
            <div style={ball}><div style={innerball}></div></div>
        </div>
    );
}

export default Roommap

