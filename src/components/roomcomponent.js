import '../index.css'
import {  Link } from "react-router-dom";

const Roomcomponent = ({ fullname, color }) => {

    const styles = {
        

     
    };
    return (
        <div class={fullname}>
            <Link style={{backgroundColor: color === 0? "#ff5e5e":"#82ffac", styles, margin: "10px", display: "flex",
        justifyContent: "center",
        color: "black",
        border: "none",
        borderRadius: "10px",
        margin: "15px",
        fontFamily: "sans-serif",
        fontWeight: "700",
        fontSize: "15px",
        width: "100px",
        height: "40px",}} to="/room">{fullname}</Link>
        </div>
    );
}

export default Roomcomponent