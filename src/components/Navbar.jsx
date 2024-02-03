import {Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import './Navbar.css'
const Navbar = (props) => {
  let logIn=props.logIn;
  let setLogIn=props.setLogIn;
  
  function logOutHandler(){
    setLogIn(false);
    toast.success("log Out Suuccessfully");
  }
  return (
    <div className='nav' >
      <div >
        <Link to='/' className='a1'>Study Notion</Link>
      </div>
        <ul className='list'>
          <li>
            <Link to='/' className='a2'>Home </Link>
          </li>
          <li ><Link to='/' className='a2'>About</Link></li>
          <li>  <Link to='/' className='a2'>Contact</Link> </li>
        </ul>
      <div>
        {
          !logIn&&
          <Link to="/login" ><button className='a3'>Login</button></Link>
        }

        {
          logIn&&
          <Link to="/"><button onClick={logOutHandler} className='a3'>Logout</button></Link>
        }
        {
          !logIn&&
          <Link to="/signup"><button className='a3'>SignUp</button></Link>
        }
        {
          logIn&&
          <Link to="/dashboard"><button className='a4'>Dashboard</button></Link>
        }
      
      </div>


    </div>
  )
}

export default Navbar
