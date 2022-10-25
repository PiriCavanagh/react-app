const ball = {
    position: 'absolute',
    top: '20',
    left: '20',
    width: '50px',
    height: '50px',
    background: 'red',
};
const Roommap = () => {
    return (
        <div className='roommap'>
            <div style={ball}></div>
        </div>
    );
}

export default Roommap

