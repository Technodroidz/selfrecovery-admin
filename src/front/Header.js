import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Multiselect from 'multiselect-react-dropdown';
import "@fontsource/jost";
import {useState} from 'react';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import http from '../http'
export const Header = () => { 
   const navigate = useNavigate();  
   
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();

   ReactSession.setStoreType("localStorage");
   const sessioncheck = ReactSession.get("admin");

   const submitForm = () => {
      if(email == null){
         return swal("Email is mandatory");
        }
      if(password == null){
         return swal("Password is mandatory");
        }
    //  console.log(email+' '+password);
     // swal(email+' '+password);
     http.post('/login',{email:email,password:password})
      .then(res=>{
         try{
            console.log(res);
            if(res.status === 200){
           const userdata = JSON.stringify(res.data);
           const uservalue = JSON.parse(userdata);
           console.log(uservalue.data);
           const adminsess = uservalue.data;
           ReactSession.setStoreType("localStorage");
           ReactSession.set("admin", adminsess);
          

           swal(res.data.message);
           window.location.reload();
            navigate('/');
         }else{
            swal("Wrong credentials"); 
         }
       }catch(e){
            swal("Wrong credentials");    
         }
         }).catch((e) => {
         swal("Wrong credentials");
      });
  
   } 

   const logout = () => {
      ReactSession.setStoreType("localStorage");
      ReactSession.remove("admin");
      swal({ 
         title: "Success!",
         text: 'Logout Successful',
         type: "success"}).then(okay => {
         if (okay) {
            navigate('/');
         }
         });
   }

const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
// modal
const [isOpen1, setIsOpen1] = React.useState(false);
const showModal1 = () => { setIsOpen1(true);};
const hideModal1 = () => { setIsOpen1(false);};
$(document).ready(function(){
   $("#navbar").click(function(){
      $('.navbar ul').show();
      // $('.navbar ul').toggleClass("active");
    });
 });


return (
<>
<header id="header" className="fixed-top">
   <div className="container d-flex align-items-center justify-content-between">
      <Link to="/" className="logo">
      <img src={window.location.origin + '/assets/img/logo.png'} alt="logo" className="img-fluid"/>
      </Link>
      <nav id="navbar" className="navbar">
         <ul>
            <li>
               <Link className="nav-link scrollto active" to="/">
               Home</Link>
            </li>
            <li>
               <Link className="nav-link scrollto" to="/Quizzes">
               Quizzes</Link>
            </li>
            <li>
               <Link className="nav-link scrollto" to="/Account">
               Account</Link>
            </li> 
            {/* <li>
               <Link className="nav-link scrollto" to="/Questionnaire">
               Questionnaire</Link>
            </li>            */}
            <li>
               <Link className="nav-link scrollto" to="/Statistics">
               Statistics</Link>
            </li>
            {/* <li>
               <Link className="nav-link scrollto" to="/Possibilities">
               Possibilities</Link>
            </li> */}
              {
                (() => {
                    if(sessioncheck == null) {
                            return (
                              <li>
                              <Link className="getstarted scrollto" onClick={showModal}>
                              Login</Link>
                              </li>
                            )
                        }else {
                            return (
                              <li>
                                 <div className="dropdown">
                                    <Link className="nav-link scrollto" role="button" id="adminDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    &#127773; Welcome Admin
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                                          <li>
                                             <Link className="dropdown-item" onClick={logout}>
                                                Logout
                                             </Link>
                                          </li>
                                    </ul>
                                 </div>
                              </li>
                             
                            )
                        }
                })()  
            }  
            
            {/* <li>
               <Link className="getstarted scrollto" onClick={showModal}>
               Login</Link>
            </li> */}
            {/* <li>
               <Link className="getstarted2 scrollto" onClick={showModal1}>
               Sign up</Link>
            </li> */}
         </ul>
         {/* <i className="fa fa-list mobile-nav-toggle"></i> */}
      </nav>
   </div>
</header>
<Modal show={isOpen} onHide={hideModal} >
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-7">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex  text-center">
                  <div className="w-100">
                     <h3>Welcome Back!</h3>
                     <p>Please enter your details</p>
                  </div>
               </div>
               {/* <form className="mt-2"> */}
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Email</label>
                           <input type="text" className="form-control" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Password</label>
                           <input type="password" className="form-control" placeholder="**********" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <Link to="/">
                        <h6 className="forgot-link">Forgot Password?</h6>
                        </Link>
                     </div>
                     <div className="col-md-12 mt-4 text-center">
                        <button type="button" onClick={submitForm} className="btn-web">Login</button>
                     </div>
                     <div className="col-md-12 mt-4 text-center socal-login">
                        {/* <h5>or</h5>
                        <hr>
                        </hr>
                        <img src="assets/img/google-icon.png" style={{width: "40px"}}></img>
                        <h5 className="mt-3">Login with Google</h5> */}
                        {/* <h4 className="mt-3">
                           Don't have an account? 
                           <Link onClick={showModal1}>
                           Sign up</Link>
                        </h4> */}
                     </div>
                  </div>
               {/* </form> */}
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} >
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> 
         <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-7">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex  text-center">
                  <div className="w-100">
                     <h3>Come join us!</h3>
                     <p>Please enter your details</p>
                  </div>
               </div>
               <form className="mt-2">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>First Name</label>
                           <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Last Name</label>
                           <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Group Name</label>
                           <input type="text" className="form-control" placeholder="Group Name"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Phone</label>
                           <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Email</label>
                           <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Categories of interest</label>
                           <Multiselect
                           displayValue="key"
                           groupBy="cat"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[
                           {
                           cat: 'Create New',
                           key: 'Option 1'
                           },
                           {
                           cat: 'Create New',
                           key: 'Option 2'
                           },
                           {
                           cat: 'Create New',
                           key: 'Option 3'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           />
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Address</label>
                           <textarea className="form-control" placeholder="Address" rows="1"></textarea>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Description</label>
                           <textarea className="form-control" placeholder="Write a quick description about you or your group" rows="2"></textarea>
                        </div>
                     </div>
                     <div className="col-md-12 mt-4 text-center">
                        <button type="submit" className="btn-web">Sign up</button>
                     </div>
                     <div className="col-md-12 mt-4 text-center socal-login">
                        <h5 className="mt-3">
                           Already have an account? 
                           <Link onClick={showModal}>
                           Sign in</Link>
                        </h5>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
</>
);
};
export default Header;