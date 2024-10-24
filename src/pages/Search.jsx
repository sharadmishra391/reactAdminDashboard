import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [eno, setEno]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/employees/?empno=${eno}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          return(
            <>
              <h3 style={{fontWeight:"800"}}> Employee No : <span style={{color:"orangered"}}>{key.empno}</span></h3> 
              <h3 style={{fontWeight:"800"}}> Name : <span style={{color:"orangered"}}>{key.name}</span> </h3>
              <h3 style={{fontWeight:"800"}}> Email: <span style={{color:"orangered"}}>{key.email}</span> </h3>
              <h3 style={{fontWeight:"800"}}> Contact No. : <span style={{color:"orangered"}}>{key.contact}</span></h3>
            </>
          )
    })
    return(
        <>
        <div className="displaymainpage">
          <div className="displaytop1">
          <h1 className="searchh1"> Search Data</h1>
          <hr style={{border:"2px solid white"}}/>
          </div>
          <div className="displaytop2"> 
          <div className="parentsearch">
          <div className="search">
          <label htmlFor="" style={{color:"white",fontSize:"20px"}}>Enter Emp  No.  </label> <input className="searchinput" type="text" value={eno} 
            onChange={(e)=>{setEno(e.target.value)}} /> 
          <button className="searchbtn" onClick={handleSubmit}>Search</button>
          <div className="searchnew">
          { ans } 

          </div>
           
          </div>  
          </div>

          </div>
        </div>
          
         
        </>
    )
}
export default Search;