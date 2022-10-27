import {useState,useEffect} from "react";

function math(done){
  const result = 300*(done/100)
  return result
}
function Footer () {
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
        const arrByID = items.filter(item => item.status === 1);
        var result = arrByID.length+1
        const percent = Math.round(result/21*100);

    
  return (
    <div id="footer">
      

      <h2>Available: {21- result} rooms {percent}%</h2>
      <div class="progress">
        <div class="progress-done" style={{
          opacity: 1,
          width: math(percent),
        }}>
          {percent}%
        </div>
      </div>
    </div>
  );
}
}

export default Footer

