import{useState,useEffect} from "react";

function Consultations() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://54.87.72.37:5000/api/getConsultation")
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
        <div className='Consultations'>
            <h1 className="ctitle">Scheduled Consultations</h1>
            {items.map(item => (
            <div className="scheduledinfo">

                <div className="consultationdiv">
                    <h1 className="time">{item.start_time}</h1>
                    <h2 className="name">{item.patient_name}</h2>
                    <h3 className="doctorname">{item.staff_name}</h3>
                </div>

            
            </div>
            ))}

        </div>
    );
  }
}
  
export default Consultations
  