import{useState} from "react";

function person() {
    const [fullname, setfullname] = useState("");
    const [roll, setroll] = useState("");
    const [doctername, setdoctername] = useState("");
}
function consulation() {
    const [starttime, setstarttime] = useState("");
    const [endtime, setendtime] = useState("");
    const [patientname, setpatientname] = useState("");
    const [doctername, setdoctername] = useState("");
}
function room() {
    const [roomid, setroomid] = useState(null);
    const [usestatus, setusestatus] = useState(false);
    const [Occupants, setOccupants] = useState([]);
    const [Consultations, setConsultations] = useState([]);
}
  