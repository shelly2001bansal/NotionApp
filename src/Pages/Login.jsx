import { useState } from "react"
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import './Login.css'
const Login = (props) => {
  let setLogIn =props.setLogIn;
  const navigate= useNavigate();
  const [formData,setFormData]=useState({email:"", password:""});
  const [showPassword,setShowPassword]=useState(false);
  // const [disable,setdisable]=useState(false);

  // if(formData.email>3 && formData.password>3){
  //   setdisable(true);
  // }
  function passwordHandler(){
    setShowPassword((prev)=>!showPassword)
  }
  function changeHandler(event){
    setFormData((prev)=>(
      {
        ...prev,
        [event.target.name]:event.target.value
      }
    )
    )
  }

  function submitHandler(event){
    event.preventDefault();
    setLogIn(true);
    toast.success("logged in successfully") 
    navigate("/dashboard")
  }

  return (
    <>
      <div>
      <h4 className="z1">Welcome Back</h4>
      <p className="z2">Build skills for today,tomorrow and beyond</p>
      <p className="z3">Education to future proof your career</p>
      </div>
      <form onSubmit={submitHandler}>
        <label className="z15">Email Address<sup>*</sup></label>
        <br/>
        <input type="email" name ="email" onChange={changeHandler} value={formData.email} className="z4" placeholder="enter your email.."/>
        <br/>
        <br/>
        <label className="z15">Password<sup>*</sup></label>
        <br/>
        <input type={showPassword ? "text" : "password"}
        name="password" onChange={changeHandler} value={formData.password} 
        className="z4" placeholder=" Enter your Password"
        />
        <span onClick={passwordHandler} className="z9">
          {
            showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>
          }
        </span>
        <br></br>
        <sub className="z8">forgot password</sub>
        <br/>
        <br/>
        <button className="z5" 
        >SignIn</button>
        <div>
          <div className="z20"></div>
          <p className="z12">Or</p>
          <div className="z21"></div>
        </div>
        <button className="z7">Sign in with google</button>
      </form>
    </>
    
  )
}

export default Login;
