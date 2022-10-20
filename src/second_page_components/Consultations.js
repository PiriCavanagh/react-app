const Consultations = () => {
    return (
        <div className='Consultations'>
            <h1 className="ctitle">Scheduled Consultations</h1>
            <div className="scheduledinfo">
                <div className="consultationdiv">
                    <h1 className="time">10:00 - 10:30</h1>
                    <h2 className="name">Mr. Harry Black</h2>
                    <h3 className="doctorname">Dr. G.Smith</h3>
                </div>
                <div className="consultationdiv">
                    <h1 className="time">10:00 - 10:30</h1>
                    <h2 className="name">Ms. Mary White</h2>
                    <h3 className="doctorname">Dr. M.Turner</h3>
                </div>
                <div className="consultationdiv">
                    <h1 className="time">10:30 - 11:00</h1>
                    <h2 className="name">Mr. Donald Holand</h2>
                    <h3 className="doctorname">Dr. G.Smith</h3>
                </div>
            </div>

        </div>
    );
  }
  
  export default Consultations
  