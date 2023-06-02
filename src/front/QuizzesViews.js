import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import {useEffect,useState} from 'react';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import http from '../http'
export const QuizzesViews = () => {
   const navigate = useNavigate();  
   const {id} = useParams();
   const[alluserquizzes, setUserQuizzes] = useState([]);

   ReactSession.setStoreType("localStorage");
   const sessioncheck = ReactSession.get("admin");
   //console.log(sessioncheck.user_id);
   let x = 0;
   useEffect(()=>{
      fetchAllUserQuizzes();
   },[]);

   const fetchAllUserQuizzes = () => {
      if(sessioncheck == null){
         swal("Please Login");  
         navigate('/');
      }else{
         http.post('/fetch-user-quiz',{user_id:id})
         .then(res=>{
            try{
              // console.log(res);
               if(res.status === 200){
              setUserQuizzes(res.data.data);
            }else{
               swal("Something Wrong"); 
            }
          }catch(e){
               swal("Something Wrong");    
            }
            }).catch((e) => {
               swal("Something Wrong");
         });
      }
   }

 //  console.log(alluserquizzes);

 const deleteQuiz = (quizId) => {
   // alert(quizId);
      if(sessioncheck == null){
         swal("Please Login");  
      }else{
         http.post('/delete-quiz',{quiz_id:quizId})
         .then(res=>{
            try{
               //console.log(res);
               if(res.status === 200){
              // swal(res.data.message);
               swal({ 
                title: "Success!",
                text: res.data.message,
                type: "success"}).then(okay => {
                if (okay) {
                 window.location.reload();
                }
                });
            }else{
               swal("Something Wrong"); 
            }
            }catch(e){
               swal("Something Wrong");    
               }
               }).catch((e) => {
               swal("Something Wrong");
            });
         }  
   }

   const previewQuiz = (quizId) => {
      const url = window.location.origin + '/ViewQuizes/'+quizId;
      window.location.href = url;
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
const [isOpen3, setIsOpen3] = React.useState(false);
const showModal3 = () => { setIsOpen3(true);};
const hideModal3 = () => { setIsOpen3(false);};
return (
<>
<main id="main">
   <section>
      <div className="container">         
         <div className="row justify-content-center mt-3">
            <div className="col-md-12 page-box">
               <div className="row justify-content-center">
               <div className="col-lg-12 text-center page-style2">
                  <h2>List of quizzes</h2>
               </div>
                  <div className="col-md-8 mt-4">
                  {alluserquizzes.map((usersquiz,index)=>( 
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={() => { deleteQuiz(usersquiz.id); }} src="../assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           {/* <img src="../assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/> */}
                           <img onClick={() => { previewQuiz(usersquiz.id); }} src="../assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz {++x}:</b>{usersquiz.quiz_name}.</spam>
                        </h5>
                     </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<Modal show={isOpen} onHide={hideModal} >
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-9">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 text-center page-style2">
                        <h2 onClick={hideModal}><u>What are recommended quizzes? </u><img src="../assets/img/up-icon.png" alt="down"  style={{width: "25px"}} className="img-fluid"/></h2>
                     </div>
                  </div>
               </div>
               <p className="mt-4">Recommendation Quizzes are like personality quizzes that give users their top result or match. Recommendation Quizzes give users multiple top results and matches.</p>
               <p>Recommendation Quizzes can be used to give customers a personalized list of products, readers a personalized list of content, or students a personalized list of academic courses. If there are ever options, Recommendation Quizzes can help simplify our decision-making.</p>
               <p>Build Recommendation Quizzes by entering all the Possibilities into this Quiz Builder App. If you own a pizza company for instance, enter all your speciality pizzas. Then write Questions and Answers you’d ask to help someone make a decision.</p>
               <p>If you own a pizza company, for instance, ask people what toppings they like, if they are dairy or gluten free, etc. As you build the quiz, we’ll ask you to assign values to your Questions and Possibilities. These values will help our App serve customized recommendations to users who take the quizzes.</p>
               <Link onClick={hideModal}>
               <img src="../assets/img/close.png" alt="close"  style={{width: "35px"}} className="img-fluid mt-4"/></Link>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} >
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/active.png" alt="upload-csv" className="img-fluid"/>
                                 <h5>Active</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/inactive.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                                 <h5>Inactive</h5>
                              </div>
                           </div>
                           {/* <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/quizzes-delete.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen2} onHide={hideModal2} >
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
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
                              <button type="submit" className="btn-web" onClick={hideModal2} >Yes</button>                  
                           </div>
                           <div className="col-md-6 mt-3 mb-3">
                              <button type="submit" className="btn-web" onClick={hideModal2} >No</button>
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
<Modal show={isOpen3} onHide={hideModal3} >
   <Modal.Body className="p_50">
      <span onClick={hideModal3} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row justify-content-center">
                           <div className="col-md-7 mb-5">
                              <select class="form-select" aria-label="Default select example">
                                 <option selected>Quiz Name</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                           </div>
                        </div>
                        <div className="row justify-content-center">
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="../assets/img/close.png" alt="close"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>                
                           </div>
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="../assets/img/check.png" alt="check"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>  
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
export default QuizzesViews;