import{useState,useEffect} from "react";

function text(result){
    if(result > 0){
        var string ="In Use";
        return string
    }
    else{
        var string ="Available";
        return string
    }
}

function In_use_sign() {
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
            var result = items.map(item =>([item.occupants]));
            const string = text(result);




            
    return(
        <h3 style={{color: result === 1 ? "red":"green"}}>{string}{result} </h3> 
    )
}
}
export default In_use_sign