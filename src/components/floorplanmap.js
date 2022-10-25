import '../index.css'
import Roomcomponent from "./roomcomponent";
import {useState,useEffect} from "react";




function floorplanmap(){
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
  return (
<div class="floormap">
    {items.map(item => (
    <div class="floormap">
       <h1> {item.id} {item.inuse} </h1>
      <Roomcomponent fullname="room101" color="red" />
      <Roomcomponent fullname="room102" color="red" />
      <Roomcomponent fullname="room103" color="red" />
      <Roomcomponent fullname="room104" color="red" />
      <Roomcomponent fullname="room105" color="red" />
      <Roomcomponent fullname="room106" color="red" />
      <Roomcomponent fullname="room107" color="red" />
      <Roomcomponent fullname="room108" color="red" />
      <Roomcomponent fullname="room109" color="red" />
      <Roomcomponent fullname="room110" color="red" />
      <Roomcomponent fullname="room111" color="red" />
      <Roomcomponent fullname="room112" color="red" />
      <Roomcomponent fullname="room113" color="red" />
      <Roomcomponent fullname="room114" color="red" />
      <Roomcomponent fullname="room115" color="red" />
      <Roomcomponent fullname="room116" color="red" />
      <Roomcomponent fullname="room117" color="red" />
      <Roomcomponent fullname="room118" color="red" />
      <Roomcomponent fullname="room119" color="red" />
      <Roomcomponent fullname="room120" color="red" />
      <Roomcomponent fullname="room121" color="red" />
      <div class="whitespace1"></div>
      <div class="whitespace2"></div>
      <div class="whitespace3"></div>
      <div class="whitespace4"></div>
      <div class="whitespace5"></div>
    </div>
    
    ))}
    </div>

  );
}
}



export default floorplanmap
