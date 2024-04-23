// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.css';
import logofull from './images/logofull.png';
import { useNavigate } from 'react-router-dom';



function Login() {
  
  const navigate = useNavigate();
  
  const [ logindetail , setlogindetail ] = useState({
    name : "",
    password : ""
  });
  
  //admin
  const [admin , setAdmin] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/admin")
    .then(res=>res.json())
    .then(res=>setAdmin(res))
  },[])

  //customer
  const [customer , setcustomer] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/customer")
    .then(res=>res.json())
    .then(res=>setcustomer(res))
  },[])

  //vendor
  const [vendor , setvendor] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/vendor")
    .then(res=>res.json())
    .then(res=>setvendor(res))
  },[])

  function loginCheck(){
    console.log("login detail" , logindetail);
    const adm = admin.find(temp=>temp.name == logindetail.name && temp.password == logindetail.password)
    const cst = customer.find(temp=>
      {
        return logindetail.name == temp.cst_name && logindetail.password == temp.cst_password})
    const ven = vendor.find(temp=>logindetail.name == temp.ven_name && logindetail.password == temp.ven_password)
    console.log("ven-----",ven)
    console.log(cst)
    if(adm != null){
      navigate("/admin")
    }
    else if(cst != null){
      localStorage.setItem("cstloginid" , cst._id)
      navigate("/customer")
    }
    else if(ven != null){
      localStorage.setItem("venname",ven.ven_name)
      localStorage.setItem("venloginid",ven._id)
      navigate("/vendor")
    }
    else{
      alert("Enter valid input")
    }
  }
  return (
    <div class="cover">
        <div class="logo">
          <img src={logofull} alt="no found"/>
        </div> 
        <div class="main">
          <div class="parentHeader">
            <div class="header">
              <span id="logintext">Login</span>
            </div>
          </div>
          <div class="field">
            <span>
              Name :
            </span>
            <input type="text" onChange={(e)=>{
              setlogindetail({...logindetail , name : e.target.value})
            }}/>
          </div>
          <div class="field">
            <span>
              Password :
            </span>
            <input type="password" onChange={(e)=>{
              setlogindetail({...logindetail , password : e.target.value})
            }}/>
          </div>
          {/* <div class="field">
            <span>
              Category :
            </span>
            <input type="password"/>
          </div> */}
          <div class="footer">
            <div class="forgot">Forgot Password?</div>
            <div class="loginbtn">
              <button onClick={loginCheck}>Login</button>
            </div>
           
          </div>
        </div>
      </div>
  );
}

export default Login;
