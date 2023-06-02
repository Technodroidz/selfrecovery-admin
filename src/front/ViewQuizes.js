import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../front/Header';
import Footer from '../front/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect } from 'react';
import http from '../http'

export const ViewQuizes = () => {
   const navigate = useNavigate();
   const {id} = useParams(); 
   const [questions , setQuestions] = useState([]); 
   const [quiztitle, setQuizTitle] = useState("");
   let x = 0;
   useEffect(()=>{
      fetchQuizQuestionData();
      fetchQuizTitle();
   },[]);

   const fetchQuizTitle = () => {
      http.post('/fetch-quiz-title',{quiz_id:id})
      .then(res=>{
         try{
            if(res.status === 200){
           // console.log(res.data.data);
            setQuizTitle(res.data.data); 
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
  // console.log(quiztitle.quiz_title);
   const fetchQuizQuestionData = () => {
      http.get('/share-quiz/' + id)
        .then(res => {
          try {
           // console.log(res);
               if (res.status === 200) {
               const data = res.data.data;
               const transformedData = data.map((quiz) => {
                  return quiz.question_details.map((question) => {
                     return {
                     title: question.question_title,
                     answer: question.answer_details.map((answer) => answer.answer),
                     };
                  });
               }).flat();
                //console.log(transformedData);
                setQuestions(transformedData); 
               } else {
               swal("Something Wrong");
               }
            } catch (e) {
               swal({ 
                  title: "Warning!",
                  text: 'No Questions are available in this quiz. Please add question first.',
                  });
                  navigate('/Quizzes');
            }
         }).catch((e) => {
            swal("Something Wrong");
        });
    }
 
      const [currentQuestion, setCurrentQuestion] = useState(0);
    
      const handleNext = () => {
         setCurrentQuestion((prevQuestion) =>
           prevQuestion === questions.length - 1 ? prevQuestion : prevQuestion + 1
         );
       };
       
       const handlePrevious = () => {
         setCurrentQuestion((prevQuestion) =>
           prevQuestion === 0 ? prevQuestion : prevQuestion - 1
         );
       };
       
    
      const question = questions[currentQuestion];
return (
<>

<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4><b>Quiz Name:</b> {quiztitle.quiz_title}</h4>
               </div>
               <div className="container-fluid">
                  <div className="row justify-content-center">
                     <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                       
                           <div id="msform">
                              <fieldset>
                              {questions.length > 0 && currentQuestion < questions.length ? (
                              <div className="form-card">
                                 <div className="row">
                                    <div className="col-12">
                                    <h2 className="fs-title">
                                       <b>Question {currentQuestion + 1}:</b> {question.title}
                                    </h2>
                                    </div>
                                    <div className="col-12">
                                    <ul className="ps-question">
                                       {question.answer.map((answer, index) => (
                                          <li className="active step_1 rounded-pill bg-question text-start" key={index}>
                                          {answer}
                                          </li>
                                       ))}
                                    </ul>
                                    </div>
                                 </div>
                              </div>
                              ) : (
                              <div>No questions found.</div>
                              )}

                              <input type="button" name="previous" className="previous action-button-previous mb-4" value="Previous Question" onClick={handlePrevious} />
                              {currentQuestion === questions.length - 1 ? (
                              <input type="button" name="next" className="next action-button mb-4" value="Finish Quiz" onClick={handleNext} />
                              ) : (
                              <input type="button" name="next" className="next action-button mb-4" value="Next Question" onClick={handleNext} />
                              )}
                              </fieldset>
                           </div>
                       
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<Footer />
</>
)

}
export default ViewQuizes;