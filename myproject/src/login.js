// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.css';
import logofull from './images/logofull.png';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [logina , setLogina] = useState([]);
  const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:3030/loginapi')
        .then((res)=>res.json())
        .then((res)=>setLogina(res));
    },[]);
    console.log(logina);

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
            <input type="text"/>
          </div>
          <div class="field">
            <span>
              Password :
            </span>
            <input type="password"/>
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
              <button onClick={()=>{
                navigate("/admin");
              }}>Login</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
