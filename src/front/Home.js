import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Multiselect from 'multiselect-react-dropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import swal from 'sweetalert';
import http from '../http'

export const Home = () => {

   const navigate = useNavigate();  
   
   const [email,setEmail] = useState();
   const [phone,setPhone] = useState();
   const [message,setMessage] = useState();

   const submitForm = () => {
      if(email == null){
         return swal("Email is mandatory");
      }
      if(phone == null){
         return swal("Phone is mandatory");
      }
      if(message == null){
         return swal("Message is mandatory");
      } 
      http.post('/submit-query',{email:email,phone:phone,message:message})
      .then(res=>{
         try{
            // console.log(res);
            if(res.status === 200){
            swal(res.data.message);
            window.location.reload();
               navigate('/');
            }else{
               swal("Please try later"); 
            }
         }catch(e){
               swal("Something Wrong");    
         }
      }).catch((e) => {
         swal("Something Wrong");
      }); 

   }   


const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
// modal
const [isOpen1, setIsOpen1] = React.useState(false);
const showModal1 = () => { setIsOpen1(true);};
const hideModal1 = () => { setIsOpen1(false);};
// modal
const [isOpen2, setIsOpen2] = React.useState(false);
const showModal2 = () => { setIsOpen2(true);};
const hideModal2 = () => { setIsOpen2(false);};
// modal
const [isOpensure, setIsOpensure] = React.useState(false);
const showModalsure = () => { setIsOpensure(true);};
const hideModalsure = () => { setIsOpensure(false);};

return (
<>  
<main id="main">
   <section className="about">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="services-box">
                  <h2>Account Manager</h2>
                  <img onClick={showModal} src="assets/img/AccountManager.png" alt="logo" className="img-fluid"/>
                  <p className="mt-3">Manage Client Accounts</p>
               </div>
               {/* <div className="services-box">
                  <h2>Professional Services</h2>
                  <h4 onClick={showModal2}>API ACCESS </h4>
                  <img onClick={showModal2} src="assets/img/professional-services.png" alt="logo" className="img-fluid"/>
                  <p className="mt-3">-We'll build your recommendation quiz.</p>
                  <p>-We'll implement it wherever you need.</p>
                  <p>-Custom solutions & consultations.</p>
               </div> */}
               <div className="services-box">
                  <h2>Need help? </h2>
                  <img onClick={showModal1} src="assets/img/need-help.png" alt="logo" className="img-fluid"/>
                  <p className="mt-3"><u>Access FAQs</u></p>
                  <p><u>Access tutorials</u></p>
                  <p>Submit questions & feedback</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<Modal show={isOpen} onHide={hideModal} >
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="modal-popup text-center p-4 p-md-5">
         <div className="row justify-content-center">
            <div className="col-md-8">
               <Tabs>
                  <TabList>
                     <Tab>
                        <h5><u>Account Management</u></h5>
                     </Tab>
                     <Tab>
                        <h5><u>Admin Access</u></h5>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     <div className="d-flex mt-4">
                        <div className="w-100">
                           <h3>Account Management</h3>
                        </div>
                     </div>
                     <p>Access and edit a user's account.</p>
                     <div className="row justify-content-center">
                        <div className="col-md-5">
                           <Multiselect
                           placeholder="Access Account As"
                           displayValue="key"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[
                           {
                           key: 'fransisco@gmail.com'                                    
                           },                                    
                           {
                           key: 'jimmy@gmail.com'
                           },
                           {
                           key: 'mattrindy@gmail.com'
                           },
                           {
                           key: 'nancypelosi@gmail.com'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           />  
                           <button type="submit" className="btn-web mt-4">Access</button>
                        </div>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-md-12 mt-5">
                           <div className="management-box">
                              <p>Submit a professional service charge to a user's add-on options.</p>
                              <form className="mt-5">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <Multiselect
                                          placeholder="Client"
                                          displayValue="key"
                                          onKeyPressFn={function noRefCheck(){}}
                                          onRemove={function noRefCheck(){}}
                                          onSearch={function noRefCheck(){}}
                                          onSelect={function noRefCheck(){}}
                                          options={[
                                          {
                                          key: 'fransisco@gmail.com'                                    
                                          },                                    
                                          {
                                          key: 'jimmy@gmail.com'
                                          },
                                          {
                                          key: 'mattrindy@gmail.com'
                                          },
                                          {
                                          key: 'nancypelosi@gmail.com'
                                          }
                                          ]}
                                          showCheckbox
                                          showArrow
                                          />  
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <input type="text" className="form-control" placeholder="Custom Solution Title"/>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <input type="text" className="form-control" placeholder="Cost ex $399.50"/>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <Multiselect
                                          placeholder="Cost per"
                                          displayValue="key"
                                          onKeyPressFn={function noRefCheck(){}}
                                          onRemove={function noRefCheck(){}}
                                          onSearch={function noRefCheck(){}}
                                          onSelect={function noRefCheck(){}}
                                          options={[
                                          {
                                          key: 'month'                                    
                                          },  
                                          {
                                          key: 'One time payment'
                                          }
                                          ]}
                                          showCheckbox
                                          showArrow
                                          />  
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <input type="text" className="form-control" placeholder="Months Effective"/>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group mb-3">
                                          <textarea className="form-control" placeholder="Write up custom solution description." rows="4"></textarea>
                                       </div>
                                    </div>
                                    <div className="col-md-12 mt-4 ">
                                       <button type="submit" className="btn-web">Submit</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="d-flex mt-4">
                        <div className="w-100">
                           <h3>Admin Access</h3>
                        </div>
                     </div>
                     <p>Access and edit a admin’s account.</p>
                     <div className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                           <Multiselect
                           placeholder="Admin Email"
                           displayValue="key"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[
                           {
                           key: 'add new admin'
                           },
                           {
                           key: 'jimmy@gmail.com'                                    
                           },                                    
                           {
                           key: 'mattrindy@gmail.com'
                           },
                           {
                           key: 'nancypelosi@gmail.com'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           />  
                        </div>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                           <Multiselect
                           placeholder="Account Access"
                           displayValue="key"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[
                           {
                           key: 'All'                                    
                           },
                           {
                           key: 'fransisco@gmail.com'                                    
                           },                                    
                           {
                           key: 'jimmy@gmail.com'
                           },
                           {
                           key: 'nancypelosi@gmail.com'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           />  
                        </div>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                           <Multiselect
                           placeholder="Admin Access"
                           displayValue="key"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[                              
                           {
                           key: 'All'                                    
                           },                                    
                           {
                           key: 'View Accounts'
                           },
                           {
                           key: 'Tier Adjuster'
                           },
                           {
                           key: 'Professional Services'
                           },
                           {
                           key: 'Sandbox Access'
                           },
                           {
                           key: 'Privilege Admin'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           /> 
                        </div>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                           <Multiselect
                           placeholder="Admins Over"
                           displayValue="key"
                           onKeyPressFn={function noRefCheck(){}}
                           onRemove={function noRefCheck(){}}
                           onSearch={function noRefCheck(){}}
                           onSelect={function noRefCheck(){}}
                           options={[                              
                           {
                           key: 'All'                                    
                           },                                    
                           {
                           key: 'fransisco@gmail.com'
                           },
                           {
                           key: 'jimmy@gmail.com'
                           },
                           {
                           key: 'nancypelosi@gmail.com'
                           }
                           ]}
                           showCheckbox
                           showArrow
                           />  
                        </div>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-md-12 mt-5">
                           <div className="management-box">
                              <h4><b>user info</b></h4>
                              <form className="mt-5">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="mb-3 text-left">
                                          <h5>User: Matt Rindlisbacher</h5>
                                          <h5>Email: mattrindy@gmail.com</h5>
                                          <h5>Phone: 801-970-4047</h5>
                                          <h5>Account Access: All</h5>
                                          <h5>View Accounts: Yes</h5>
                                          <h5>Tier Adjuster: Yes</h5>
                                          <h5>Professional Services: Yes</h5>
                                          <h5>Sandbox Access: Yes</h5>
                                          <h5>Admin Access: All</h5>
                                          <h5>Admins Over: All</h5>
                                       </div>
                                    </div>
                                    <div className="col-md-12 mt-4 ">
                                       <h6 onClick={showModalsure} className="btn-web">Change</h6>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} >
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <h3>Need Help?</h3>
                  </div>
               </div>
               <p className="m-0"><u>Access FAQs</u></p>
               <p><u>Access Tutorial Video</u></p>
               <h4>Submit questions & feedback</h4>
               <form className="mt-5">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
                        </div>
                        <div className="form-group mb-3">
                           <textarea onChange={e=>setMessage(e.target.value)} className="form-control" placeholder="Your message" rows="8"></textarea>
                        </div>
                     </div>
                     <div className="col-md-12 mt-4">
                        <button type="button" onClick={submitForm} className="btn-web">Submit</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen2} onHide={hideModal2} >
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center mt-4 mb-4 p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100 mb-3 mt-4">
                     <h3>API ACCESS</h3>
                  </div>
               </div>
               <p>Update possibilities live via API push.</p>
               <p className="mt-3">Pull data, quiz results, and more via API pull.</p>
               <form className="mt-4">
                  <div className="row">
                     <div className="col-md-12 mt-2">
                        <button type="submit" className="btn-web">Access API</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>

<Modal show={isOpensure} onHide={hideModalsure} >
   <Modal.Body className="p_50">
      <span onClick={hideModalsure} className="clos"> 
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row">
                           <div className="col-md-12 mb-5">
                              <h3>Are you sure?</h3>
                           </div>
                           <div className="col-md-6 mt-3 mb-3">
                              <button type="submit" className="btn-web" onClick={hideModalsure} >Yes</button>                  
                           </div>
                           <div className="col-md-6 mt-3 mb-3">
                              <button type="submit" className="btn-web" onClick={hideModalsure} >No</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
</>
)
}
export default Home;