import { useState } from "react";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SignUp = (props) => {
  
  let setLogIn=props.setLogIn;
  const navigate=useNavigate();
  const [formData,setFormData]=useState({firstName:"", lastName:"" ,email:"",password:"",confirmPassword:""});
  const [showPassword,setShowPassword]=useState(false);
  const [confirm,setConfirm]=useState(false);
  
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
    

    if(formData.password!==formData.confirmPassword){
      toast.error("Password donot match");
      return;
    }
    setLogIn(true);
    toast.success("Account created");
    navigate("/dashboard");

  }

  
  function passwordHandler(){
    setShowPassword((prev)=>!showPassword)
  }
  
  function confirmHandler(){
    setConfirm((prev)=>!confirm);
  }
  return (
    <div>
      <div>
        <h4 className="y1">Welcome Back</h4>
        <p className="y2">Build skills for today,tomorrow and beyond</p>
        <p className="y3">Education to future proof your carrer</p>
        <button className="y4">
          <button className=" y5">Student</button>
          <button className="y5">Instructor</button>
        </button>
        
      </div>
      <form onSubmit={submitHandler}>
        
        <div className="y7">
        <label className="y6">First name <sup>*</sup>
        <br/>

          <input
          className="y8"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter your first Name"
          />
          </label>
        
       
        <label className="y6">Last name <sup>*</sup>
        <br/>
          <input
          className="y8"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter your last name"
          />
        </label>
        </div>
        <br/>
        <div>
        <label className="y9">Email Address <sup>*</sup>
        <br/>
          <input
          className="y10"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your email"
          />
        </label>
        </div>
        <br/>
        <div className="y7">
          <label className="y6" >Password<sup>*</sup>
            <br/>
            <input type={showPassword ? "text" : "password"}
            name="password" onChange={changeHandler} value={formData.password} 
            placeholder="password" className="y8"
            />
            <span className="y20" onClick={passwordHandler}>
              {
                showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
              }
            </span>
          </label>
          <br/>

          <label className="y6" >Confirm Password <sup>*</sup>
            <br/>
            <input  className="y8" type={confirm ? "text" : "password"}
            name="confirmPassword" onChange={changeHandler} value={formData.confirmPassword} 
            placeholder="confirm password"
            />
            <span className="y21" onClick={confirmHandler}>
              {
                confirm ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
              }
            </span>
          </label>
        </div>
        
        <br/>
        <br/>
        <button className="y15">Create Account</button>
        <div>
          <div className="y22"></div>
          <p className="y16">Or</p>
          <div className="y23"></div>
        </div>
        <button className="y15">Sign in With google</button>
      </form>
    </div>
    
  )
}

export default SignUp
