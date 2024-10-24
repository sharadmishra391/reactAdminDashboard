import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'
const Insert=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
   const handleSubmit=()=>{
    let api="http://localhost:3000/employees";
    axios.post(api, input).then((res)=>{
        console.log(res);
        toast.success("Data Successfully Save!!!")
    })
   }
    return(
        <>
        <div className="insertback">
        <h1 className="inserth1"> INSERT RECORD</h1>

            <div className="insertback1">
         <div className="parentinsert" >
         <div className="insertform">
         <label htmlFor="">Employee No :</label> <br /> <input type="text" name="empno"  
         onChange={handleInput} />
         <br/>
         <label htmlFor="">Name :</label> <br /> <input className="inputtwo" type="text" name="name"
          onChange={handleInput} />
         <br/>

        <label htmlFor="">Email :</label> <br /> <input className="inputthree" type="text" name="email"
         onChange={handleInput} />
         <br/>
         <label htmlFor="">Contact No. :</label> <br /> <input className="inputfour" type="text" name="contact"  
         onChange={handleInput} />
         <br/>

         <button onClick={handleSubmit}>Save Data</button>
         </div>
         </div>

            </div>

        

        </div>
         
         
         <ToastContainer />
         
        </>
    )
}
export default Insert;