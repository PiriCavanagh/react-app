import React, {useState, useEffect} from "react";

function Fetch(){
    const[Results,Setresults]= useState([])

    useEffect(async ()=>{
    const apiResponse = await fetch("http://54.87.72.37:5000/api/getStaff")
    console.log(apiResponse)
    },[])

    return  <>

        <h1>Fetch</h1>
        {
            Results.map(post =>{

            })
        }
    </>
}

export default Fetch