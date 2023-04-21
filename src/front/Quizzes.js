import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect,useState} from 'react';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import http from '../http'
export const Quizzes = () => {
   const navigate = useNavigate(); 
   const[alluser, setUser] = useState([]);

   ReactSession.setStoreType("localStorage");
   const sessioncheck = ReactSession.get("admin");
   //console.log(sessioncheck.user_id);
   let x = 0;
   useEffect(()=>{
      fetchAllUser();
   },[]);

   const fetchAllUser = () => {
      if(sessioncheck == null){
         swal("Please Login");  
         navigate('/');
      }else{
         http.get('/fetch-all-users').then(res=>{
            try{
               console.log(res.data.data);
               setUser(res.data.data);
             }catch(e){
               console.log('error', e);        
             }
    
          })
    
      }   
   }
return (
<>
<main id="main">
   <section>
      <div className="container">         
         <div className="row justify-content-center mt-5">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h2>Quizze User List </h2>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-8">
                  <table className="table table-bordered">
                  <thead className="thead-light">
                     <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">User E-Mail</th>
                        <th scope="col">Number of Quizze</th>
                     </tr>
                  </thead>
                  <tbody>
                  {alluser.map((users,index)=>(  
                     <tr>
                        <th scope="row"><Link to={{ pathname: "/QuizzesViews/" + users.id }}>{users.first_name} {users.last_name}</Link></th>
                        <td>{users.email}</td>
                        <td><Link to={{ pathname: "/QuizzesViews/" + users.id }}>{users.quiz_count}</Link></td>
                     </tr>
                    ))}
                  </tbody>
                  </table>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   </section>
</main>
</>
)
}
export default Quizzes;