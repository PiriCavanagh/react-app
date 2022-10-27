import{useState,useEffect} from "react";

function text(result){
    if(result > 5){
        var string ="Maintenance Required";
        return string
    }
    else{
        var string ="No Maintenance Required";
        return string
    }
}
function Maintenance(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://54.87.72.37:5000/api/getTraffic")
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
            var result = items.map(item =>([item.traffic_output]));
            const string = text(result);




            
      
    return (
        <div className='maintenancediv'>
            <h1>Last Maintenance</h1>
            <h2>{result} Hours Ago</h2>
            <h3>{string} </h3>
        </div>
    );
  }
}
  
  export default Maintenance
  