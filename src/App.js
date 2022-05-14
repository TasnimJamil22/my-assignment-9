import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contuct from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Components/Categories/Categories';
import Category from './Components/Category/Category';
import CategoryDetail from './Components/CategoryDetail/CategoryDetail';
function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
         <Switch>
           <Route exact path='/'>
             <Home></Home>
           </Route>
           <Route exact path='/home'>
             <Home></Home>
           </Route>
           <Route path='/categories'>
             <Categories></Categories>
           </Route>
            <Route path='/category/:categoryId'>
              <CategoryDetail></CategoryDetail>
            </Route>
         
           <Route path='/about'>
              <About></About>
           </Route>
           <Route path='/contact'>
              <Contuct></Contuct>
           </Route>
           <Route path='*'>
               <NotFound></NotFound>
           </Route>
           </Switch>
           
           
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
