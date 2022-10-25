
import React from "react";
import Classes from "./classes";
class Fetch extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            consoltation: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://54.87.72.37:5000/api/getConsultation")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    consoltation: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, consoltation } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                consoltation.map((item) => ( 
                <ol key = { item.id } >
                    start_time: { item.start_time}, 
                    patient_name: { item.patient_name}, 
                    staff_name: { item.staff_name } 
                    </ol>
                ))
            }
        </div>

    );
}
}
   
export default Fetch;