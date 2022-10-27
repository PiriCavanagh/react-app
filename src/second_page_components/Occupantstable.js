import profile from '../components/profile1.png'
import{useState,useEffect} from "react";

const component = (
    <div className="namediv">
    <div><img src={profile} className="profileimg" alt="profile"/></div>
    <div className='nameandrolediv'><h2>Guest</h2><h3></h3></div>
</div>
);
function guestCheck(result){
    if(result > 0){
        var final = result;
        return final
    }
    else{
        var final = 0;
        return final
    }
}


function Occupantstable(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [traffics, setTraffics] = useState([]);

    useEffect(() => {
        fetch("http://54.87.72.37:5000/api/getStaff")
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

        useEffect(() => {
            fetch("http://54.87.72.37:5000/api/getTraffic")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setTraffics(result);
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
            var result = traffics.map(traffic =>([traffic.occupants]));
            var guests =result - items.length
            var checked = guestCheck(guests);
            let arrayA = [];

            for(let i =0; i < checked;i++){
                arrayA.push(component)
            }
            if(result == 0){
                return(
                    <div className='occupantstable'>
                        <div className="titlediv">Current Occupants  :<span>   {result} </span></div>
                        <div className="table"></div>
                    </div>
                );
            }
            
            else{
                return (
                    <div className='occupantstable'>
                        <div className="titlediv">Current Occupants  :<span>   {result} </span></div>
                        <div className="table">
            
                        {items.map(item => (
                            <div className="namediv">
                                <div><img src={profile} className="profileimg" alt="profile"/></div>
                                <div className='nameandrolediv'><h2>{item.name}</h2><h3>{item.occupation}</h3></div>
                            </div>
                        ))}
                        {arrayA}
            
            
            
                        </div>
            
                 
                    </div>
                );
            }

            
      


  }
}
  
  export default Occupantstable
  