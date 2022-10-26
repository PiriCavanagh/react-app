import '../index.css'
import Roomcomponent from "./roomcomponent";
import {useState,useEffect} from "react";


function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

function Floorplanmap(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("http://54.87.72.37:5000/api/getDummyRoomStatus")
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
      let invalidEntries = 0
      const arrByID = items.filter(filterByID);
      let percent = invalidEntries/21*100
      



  return (
    <div class="map">
      <Roomcomponent fullname="room101" color ={1}/>

      {items.map(item => (
      <Roomcomponent fullname={item.id}  color={item.status}/> 
      ))}
      
      <div class="whitespace1"></div>
      <div class="whitespace2"></div>
      <div class="whitespace3"></div>
      <div class="whitespace4"></div>
      <div class="whitespace5"></div>
    </div>
  );
}
}



export default Floorplanmap
