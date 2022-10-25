import{usestate} from "react";
function person(props) {
    const [fullname, setfullname] = useState("");
    const [roll, setroll] = useState("");
    const [doctername, setdoctername] = useState("");
}
function consulation(props) {
    const [starttime, setstarttime] = useState("");
    const [endtime, setendtime] = useState("");
    const [patientname, setpatientname] = useState("");
    const [doctername, setdoctername] = useState("");
}
function room(props) {
    const [roomid, setroomid] = useState(null);
    const [usestatus, setusestatus] = useState(false);
    const [Occupants, setOccupants] = useState([]);
    const [Consultations, setConsultations] = useState([]);
}
  