import '../index.css'
import Roomcomponent from "./roomcomponent";
import{useState,useEffect} from "react";




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
      <Roomcomponent fullname="room101" />
      <Roomcomponent fullname="room102" />
      <Roomcomponent fullname="room103" />
      <Roomcomponent fullname="room104" />
      <Roomcomponent fullname="room105" />
      <Roomcomponent fullname="room106" />
      <Roomcomponent fullname="room107" />
      <Roomcomponent fullname="room108" />
      <Roomcomponent fullname="room109" />
      <Roomcomponent fullname="room110" />
      <Roomcomponent fullname="room111" />
      <Roomcomponent fullname="room112" />
      <Roomcomponent fullname="room113" />
      <Roomcomponent fullname="room114" />
      <Roomcomponent fullname="room115" />
      <Roomcomponent fullname="room116" />
      <Roomcomponent fullname="room117" />
      <Roomcomponent fullname="room118" />
      <Roomcomponent fullname="room119" />
      <Roomcomponent fullname="room120" />
      <Roomcomponent fullname="room121" />
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
