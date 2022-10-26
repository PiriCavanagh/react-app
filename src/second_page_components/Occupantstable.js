import profile from '../components/profile1.png'
import{useState,useEffect} from "react";

function Occupantstable(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
      

    return (
        <div className='occupantstable'>
            <div className="titlediv">Current Occupants :<span></span></div>
            <div className="table">
            {items.map(item => (
                <div className="namediv">
                    <div><img src={profile} className="profileimg" alt="profile"/></div>
                    <div className='nameandrolediv'><h2>George Smith</h2><h3>General Surgeon</h3></div>
                </div>
            ))}
            </div>
        </div>
    );
  }
}
  
  export default Occupantstable
  