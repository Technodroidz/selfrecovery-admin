import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
export const Quizzes = () => {
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
         <div className="row">
         </div>
         <div className="row justify-content-center mt-5">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h2 onClick={showModal}><u>What are recommended quizzes? </u><img src="assets/img/down-icon.png" alt="down"  style={{width: "25px"}} className="img-fluid"/></h2>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/carbon_add-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Add</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/fluent_delete-24-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Delete</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/ci_edit.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Edit</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/bi_image.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Img</h4>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 mt-4 text-center">
                     <button type="submit" className="btn-web"><img src="assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-3">
            <div className="col-md-12 page-box">
               <div className="row justify-content-center">
                  <div className="col-md-8 mt-4">
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 1:</b> The best essential oil blend for me today.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 2:</b> The perfect bike for me.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 3:</b> The best make up brush for oily face.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img  onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 4:</b> Which sugar is good for health.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 5:</b> Good brand for clothing material.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 6:</b> Best dietary supplement for gym.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 7:</b> Best beauty product.</spam>
                        </h5>
                     </div>
                     <div className="Quizzes-q">
                        <h5>
                           <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                           <img src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 8:</b> Trending pants in the market.</spam>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-4 mt-5">
                     <div className="add-quizzes">
                        <Link onClick={showModal3}>
                        <img src="assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                        <h5>New Quiz</h5>
                        </Link>
                     </div>
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-9">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 text-center page-style2">
                        <h2 onClick={hideModal}><u>What are recommended quizzes? </u><img src="assets/img/up-icon.png" alt="down"  style={{width: "25px"}} className="img-fluid"/></h2>
                     </div>
                  </div>
               </div>
               <p className="mt-4">Recommendation Quizzes are like personality quizzes that give users their top result or match. Recommendation Quizzes give users multiple top results and matches.</p>
               <p>Recommendation Quizzes can be used to give customers a personalized list of products, readers a personalized list of content, or students a personalized list of academic courses. If there are ever options, Recommendation Quizzes can help simplify our decision-making.</p>
               <p>Build Recommendation Quizzes by entering all the Possibilities into this Quiz Builder App. If you own a pizza company for instance, enter all your speciality pizzas. Then write Questions and Answers you’d ask to help someone make a decision.</p>
               <p>If you own a pizza company, for instance, ask people what toppings they like, if they are dairy or gluten free, etc. As you build the quiz, we’ll ask you to assign values to your Questions and Possibilities. These values will help our App serve customized recommendations to users who take the quizzes.</p>
               <Link onClick={hideModal}>
               <img src="assets/img/close.png" alt="close"  style={{width: "35px"}} className="img-fluid mt-4"/></Link>
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
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="assets/img/active.png" alt="upload-csv" className="img-fluid"/>
                                 <h5>Active</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="assets/img/inactive.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                                 <h5>Inactive</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="assets/img/quizzes-delete.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                              </div>
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
<Modal show={isOpen2} onHide={hideModal2} >
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> 
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
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
                              <img src="assets/img/close.png" alt="close"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>                
                           </div>
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="assets/img/check.png" alt="check"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>  
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
export default Quizzes;