import  { useEffect } from 'react'
import {useState,} from 'react'
function Form(){

const data={name:"",email:"",password:""}
const [inputData,setInputData]=useState(data);
const[flag,setflag]=useState(false);

useEffect(()=>{
    console.log("registered");
},{flag})

function handleData(e){
setInputData({...inputData,[e.target.name]:e.target.value})
console.log(inputData)
}

function handleSubmit(e){
e.preventDefault();
if(!inputData.name || !inputData.email || !inputData.password)
{
    alert("All Fields are compulsory")
}
else(
    
setflag(true)
)


}


return(
    <>
   <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name} ,you have registered successfully</h2>:""}</pre>

    <form className="container" onSubmit={handleSubmit}>
    <div className="header">
        <h1>Regestration Form</h1>

    </div>
<div>

    <input type="text" placeholder='Enter your name' name="name" value={inputData.name} onChange={handleData}></input>
</div>
<div>

    <input type="text" placeholder='Enter your Email' name="email" value={inputData.email} onChange={handleData}></input>
</div>
<div>

    <input type="text" placeholder='Enter your Password' name="password" value={inputData.password} onChange={handleData}></input>
</div>
<button type="submit">submit</button>


    </form>
    
    </>
    

)
}
export default Form;