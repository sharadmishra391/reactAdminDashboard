import { useState, useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Update=()=>{
 const [mydata, setMydata]=useState([]);
 const navigate= useNavigate();
 const loadData=()=>{
    let api="http://localhost:3000/employees";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
 }
 useEffect(()=>{
    loadData();
 }, []);

const myRecDel=(id)=>{
    let api=`http://localhost:3000/employees/${id}`
    axios.delete(api).then((res)=>{
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}
const myEdit=(id)=>{
     navigate(`/editrec/${id}`)
}
 const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td style={{fontSize:"15px"}}> {key.empno} </td>
            <td style={{fontSize:"15px"}}> {key.name} </td>
            <td style={{fontSize:"15px"}}> {key.email} </td>
            <td style={{fontSize:"15px"}}> {key.contact} </td>
            <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={editimg} width="30" height="30" style={{mixBlendMode:'multiply',margin:'2px'}} /> 
                 </a>


                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={delimg} width="30" height="30" style={{mixBlendMode:'multiply',marginLeft:'30px'}} /> 
                 </a>
            </td>

          </tr>
        
        </>
      )
 })

    return(
        <>
        <div className="displaymainpage">
          <div className="displaytop1">
          <h1 className="displayh1">Update Data</h1>
          <hr style={{border:"2px solid white"}}/>
          </div>
          <div className="displaytop2">
          <div className="parentupdate">
          <div className="update">
          <table className="displaytable" width="100%">
            <tr>
                <th>Emp No</th>
                <th> Name</th>
                <th>Email</th>
                <th> Contact</th>
                <th> </th>
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

export default Update;