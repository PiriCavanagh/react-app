import{useState,useEffect} from "react";



const innerball = {
    borderRadius: '20px',
    width: '20px',
    height: '20px',
    background: 'red',

};
function Roommap() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://54.87.72.37:5000/api/getCoordinates")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
    return (
        
        <div className='roommap'>
            
            {items.map(item => ( 
            <div  style={{position: 'absolute',
            borderRadius: '20px',
            transform: `translate(${item.x}px, ${item.y}px)`,
            width: '30px',
            height: '30px',
            background: 'rgba(255, 0, 0, .5)',
            boxShadow: '2px 2px 10px rgba(255, 0, 0, .5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}}><div style={innerball}></div></div>
            ))}
        </div>
    );
}
}

export default Roommap

