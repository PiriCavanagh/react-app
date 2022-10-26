import '../index.css'
import {  Link } from "react-router-dom";

const Roomcomponent = ({ fullname, color }) => {

    const styles = {
        display: "flex",
        justifyContent: "center",
        color: "black",
        border: "none",
        borderRadius: "10px",
        margin: "10px",
        fontFamily: "sans-serif",
<<<<<<< HEAD
=======
        // set color of room here
        backgroundColor: {color},
>>>>>>> 31acb0f98402594a64a73bd4cb1aed2197945c7f
        fontWeight: "700",
        fontSize: "15px",
        width: "100px",
        height: "40px",
        transition: "all 300ms ease-in-out",

     
    };
    return (
        <div class={fullname}>
            <Link style={{backgroundColor: color === 0? "red":"green", styles}} to="/room">{fullname}</Link>
        </div>
    );
}

export default Roomcomponent