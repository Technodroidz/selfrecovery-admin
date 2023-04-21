import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './front/Header';
import Footer from './front/Footer';
import {Home} from './front/Home';
import {Account} from './front/Account';
import {Quizzes} from './front/Quizzes';
import {Questions} from './front/Questions';
import {Designs} from './front/Designs';
import {Possibilities} from './front/Possibilities';
import {Statistics} from './front/Statistics';
import {Questionnaire} from './front/Questionnaire';
import {QuizzesViews} from './front/QuizzesViews';

export function App() {
return (
<Router>
   <Header />
   <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Account" element={<Account />}></Route>
      <Route path="/Quizzes" element={<Quizzes />}></Route>
      <Route path="/Questions" element={<Questions />}></Route>
      <Route path="/Designs" element={<Designs />}></Route>
      <Route path="/Possibilities" element={<Possibilities />}></Route>
      <Route path="/Statistics" element={<Statistics />}></Route>
      <Route path="/Questionnaire" element={<Questionnaire />}></Route>
      <Route path="/QuizzesViews/:id" element={<QuizzesViews />}></Route>
   </Routes>
   <Footer />
</Router>
);
}
export default App;