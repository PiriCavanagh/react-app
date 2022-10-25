import '../index.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Roomcomponent = ({ fullname, color }) => {
    const styles = {
        fontSize: "10px",
        display: "flex",
        justifyContent: "center",
        color: "black",
        border: "none",
        borderRadius: "10px",
        margin: "10px",
        fontFamily: "sans-serif",
        // set color of room here
        backgroundColor: {color},
        fontWeight: "700",
        fontSize: "15px",
        width: "100px",
        height: "40px",
        transition: "all 300ms ease-in-out",
    };
    return (
        <div class={fullname}>
            <Link style={styles} to="/room">{fullname}</Link>
        </div>
    );
}

export default Roomcomponent