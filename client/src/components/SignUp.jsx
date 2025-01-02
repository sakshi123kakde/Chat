import React, {useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError, handleSucess } from './utils';

const SignUp = () => {
  const [signupInfo,setsignupInfo]=useState({
    name:'',
    email:'',
    password:''
  })

  const navigate = useNavigate();
const handleSignUp=async(e)=>{
   e.preventDefault();//page does not refresh
   const{name,email,password}=signupInfo//extract info from signupInfo
   if(!name || !email||!password){
     return handleError('all field are require')
   }
   try{
    const url ="http://localhost:5001/auth/signup";
    const response =await fetch(url,{
     method:"POST",
     headers:{
      'Content-Type':'application/json'
     },
     body:JSON.stringify(signupInfo)
    });
    const result =await response.json()
    console.log(result);
    const {success ,message}=result;
    if(success){
      handleSucess(message);
      setTimeout(()=>{
      navigate('/signIn')
      },1000);
    }
   }catch(err){
 handleError(err);
   }
}

  const handleChange=(e)=>{
     const {name,value}=e.target;
     console.log(name,value);
     const copysignupInfo ={...signupInfo}//extract login info
     copysignupInfo[name]=value;
     setsignupInfo(copysignupInfo);
  }

  console.log('signupInfo-->',signupInfo);
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="signup form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSignUp}>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Create your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name='name'
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          value={signupInfo.name}
                        />
                        <label className="form-label">Full Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name='email'
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          value={signupInfo.email}
                        />
                        <label className="form-label">Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name='password'
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          value={signupInfo.password}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <button className="btn btn-dark btn-lg btn-block">
                        Register
                      </button>
                      <p className="mt-4">
                        Already have an account?{" "}
                        <Link
                          to="/"
                          style={{ color: "#393f81", textDecoration: "none" }}
                        >
                          Sign In
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default SignUp;
