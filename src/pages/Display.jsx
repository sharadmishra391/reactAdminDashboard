import { useState, useEffect } from "react";
import axios from "axios";


const Display=()=>{
    const [empdata, setEmpdata]= useState([]);
    const loadData=()=>{
          let url="http://localhost:3000/employees";
          axios.get(url).then((res)=>{
            console.log(res.data);
            setEmpdata(res.data);
          })
    }

    useEffect(()=>{
        loadData();
    }, [])

  const ans= empdata.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.empno} </td>
            <td> {key.name} </td>
            <td> {key.email} </td>
            <td> {key.contact} </td>
          </tr>
        </>
    )
  })
    return(
        <>

        <div className="displaymainpage">
          <div className="displaytop1">
          <h1 className="displayh1">Display Data</h1>
          <hr style={{border:"2px solid white"}}/>
          </div>

          <div className="displaytop2">
          <div className="parentdisplay">
          <div className="displaydata"> 
          <table className="displaytable" width="100%" >
            <tr>
                <th> Emp No.</th>
                <th> Name</th>
                <th> Email</th>
                <th> Contact no.</th>
            </tr>
            {ans}
         </table>
         </div>
         </div>

          </div>
        </div>
         
         

        </>
    )
}
export default Display;