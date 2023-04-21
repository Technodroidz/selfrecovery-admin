import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Multiselect from 'multiselect-react-dropdown';
export const Questions = () => {
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
// modal
const [isOpen4, setIsOpen4] = React.useState(false);
const showModal4 = () => { setIsOpen4(true);};
const hideModal4 = () => { setIsOpen4(false);};
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
                  <h4><b>Quiz 1:</b> The best essential oil blend for me today.</h4>
                  <h4 className="mt-4 mb-3">Add/edit questions and answers for your quiz. Assign values to each possible answer.</h4>
               </div>
               <div className="row justify-content-center mt-4">
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
                  <div className="col-md-6 mt-4 text-center">
                     <button type="submit" onClick={showModal4} className="btn-web"><img src="assets/img/connection-box.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Dependencies</button>
                  </div>
                  <div className="col-md-6 mt-4 text-center">
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
                           <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>Quiz 1:</b> The best essential oil blend for me today.</spam>
                        </h5>
                        <div className="Quizzes-ans">
                           <div className="add-quizzes-ans">
                              <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <spam><b>Answer 1: </b> Plenty of Meat</spam>
                           </div>
                           <div className="add-quizzes-ans">
                              <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <spam><b>Answer 2: </b>  Double Meat</spam>
                           </div>
                           <div className="add-quizzes-ans">
                              <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <spam><b>Answer 3: </b>  One Meat</spam>
                           </div>
                           <div className="add-quizzes-ans">
                              <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <spam><b>Answer 4:  </b> <input type="text" className="form-control" placeholder="No Meat" style={{width: "71%"}}/></spam>
                           </div>
                           <div className="add-quizzes-ans-option">
                              <div className="row">
                                 <div className="col-3"><b>Radio Button:  </b></div>
                                 <div className="col-9 d-flex">
                                    <select className="form-control">
                                       <option selected>Radio Button</option>
                                       <option>Check Box</option>
                                       <option>Text Box</option>
                                       <option>Paragraph</option>
                                       <option>Drop Down</option>
                                       <option>Scale</option>
                                    </select>
                                    <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                 </div>
                              </div>
                           </div>
                           <div className="add-quizzes-ans-option">
                              <div className="row">
                                 <div className="col-3"><b>Answer Value 1:  </b></div>
                                 <div className="col-9 d-flex">
                                    <input type="text" placeholder="Meat" className="form-control"/>
                                    <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                 </div>
                              </div>
                           </div>
                           <div className="add-quizzes-ans-option">
                              <div className="row">
                                 <div className="col-3"><b>Value 1 Score:  </b></div>
                                 <div className="col-9 d-flex">
                                 <select className="form-control">
                                       <option selected>-2</option>
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                    </select>
                                    <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                 </div>
                              </div>
                           </div>
                           <div className="add-quizzes-ans-option">
                              <div className="row">
                                 <div className="col-3"><b>Answer Value 2:  </b></div>
                                 <div className="col-9 d-flex">
                                    <input type="text" placeholder="Vegetarian" class="form-control"/>
                                    <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                 </div>
                              </div>
                           </div>
                           <div className="add-quizzes-ans-option">
                              <div className="row">
                                 <div className="col-3"><b>Value 2 Score:  </b></div>
                                 <div className="col-9 d-flex">
                                 <select className="form-control">
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option selected>4</option>
                                    </select>
                                    <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="add-quizzes-ans-option text-right">
                           <spam> <b>Add Value (Values help with quiz results)</b></spam>
                           <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>                              
                           </div>
                        </div>
                        
                     </div>
                     <div className="Quizzes-new-ans-add">
                        <h5>
                           <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>
                           <spam><b>New Answers</b></spam>
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
<Modal show={isOpen} onHide={hideModal} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 page-style2">
                        <h5><img src="assets/img/charm_crop.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> <u>crop img</u></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} centered>
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
<Modal show={isOpen2} onHide={hideModal2} centered>
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
<Modal show={isOpen3} onHide={hideModal3} centered>
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
                              <select className="form-select" aria-label="Default select example">
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
<Modal show={isOpen4} onHide={hideModal4} >
   <Modal.Body className="p_50">
      <span onClick={hideModal4} className="clos"> 
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="row w-100">
                  <div className="col-lg-12 text-center page-style2">
                     <h2>Dependencies</h2>
                     <h4>Questions dependent on other questions.</h4>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 mt-4 text-center mb-4">
                     <button type="submit" className="btn-web"><img src="assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 mt-4">
                     <div className="qus-box">
                        <h4 className="mb-4">Add New Dependency</h4>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">show question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Select Questions"
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">If below logic is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Triggered By "
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Trigger Question"
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">answered</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Trigger Responses"
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
                        <div className="qus-icon">
                           <Link scr="/">
                           <img src="assets/img/add-filled.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
                        </div>
                     </div>
                     <div className="qus-box">
                        <h4 className="mb-4">Dependency 3</h4>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">show question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Question 2: Pick…"
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">when true / false</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="True"
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">if question is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Question 1: How…"
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
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">if answer is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Unsure"
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
                        <div className="qus-icon">
                           <Link scr="/">
                           <img src="assets/img/quizzes-edit.png" alt="close"  style={{height: "30px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
   <Modal.Footer>
      <div className="row justify-content-center">
         <div className="col-md-1 mt-3 mb-3">
            <img src="assets/img/close.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>                
         </div>
         <div className="col-md-1 mt-3 mb-3">
            <img src="assets/img/check.png" alt="check"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>  
         </div>
      </div>
   </Modal.Footer>
</Modal>
</>
)
}
export default Questions;