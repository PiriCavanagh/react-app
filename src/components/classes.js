import{useState} from "react";
function person(...props) {
    const [fullname, setFullname] = useState("");
    const [roll, setRoll] = useState("");
    const [doctername, setDoctername] = useState("");
}
function consulation(props) {
    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [patientname, setPatientname] = useState("");
    const [doctername, setDoctername] = useState("");
}
function room(props) {
    const [roomid, setRoomid] = useState(null);
    const [usestatus, setUsestatus] = useState(false);
    const [Occupants, setOccupants] = useState([]);
    const [Consultations, setConsultations] = useState([]);
}
  