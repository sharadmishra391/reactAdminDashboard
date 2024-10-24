import { useState } from "react";
import axios from "axios";
const SearchByName=()=>{
    const [ename, setEname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let empname= e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/employees`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          let str= key.name;
           let mystatus=str.includes(ename);
           console.log(mystatus);
         if (mystatus)
            {  
          return(
            <>
             <tr>
              <td> {key.empno}</td>
              <td>  {key.name} </td>
              <td> {key.email} </td>
              <td>  {key.contact}</td>
              </tr>
            </>
          )
        }
    })

    return(
        <>
        <div className="displaymainpage">
          <div className="displaytop1">
          <h1 className="searchh1"> Search By Name</h1>
          <hr style={{border:"2px solid white"}}/>
          </div>
          <div className="displaytop2">
          <div className="sbynparent">
          <div className="sbyn">
          <label htmlFor="" style={{color:"white",fontSize:"20px"}}> Enter Emp Name  : </label> <input className="searchinput" type="text" value={ename} onChange={handleChange} />
          
       
          <table className="displaytable" width="100%">
            <tr className="sbyntr">
                <th>Emp No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
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
export default SearchByName;