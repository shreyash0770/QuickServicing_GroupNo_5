import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


 import Header from './components/Header';
import Footer from './components/Constants/Footer'
import CustomerList from './components/Admin/CustomerList';
import AddCustomer from './components/Admin/AddCustomer';
import UpdateCustomer from './components/Admin/UpdateCustomer';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import AdminLogin from './components/Pages/AdminLogin';
import AdminPage from './components/Admin/AdminPage';
import ServiceProvidersList from './components/Admin/ServiceProvidersList';
import ServiceProviderSignUp from './components/Pages/ServiceProviderSignup';
import CustomerLogin from './components/Pages/CustomerLogin';
import CustomerPage from './components/Customer/CustomerPage';
import ServiceProviderPage from './components/ServiceProvider/ServiceProviderPage';
import ServiceProviderLogin from './components/Pages/ServiceProviderLogin';
import Homepage from './components/Constants/Homepage';
import ContactUS from './components/Constants/ContactUS';
import Aboutus from './components/Constants/Aboutus';

import ListFeedback from './components/Admin/ListFeedback';
import UpdateServiceProvider from './components/ServiceProvider/UpdateServiceProvider';
import ServiceProviderCards from './components/ServiceProvider/ServiceProviderCards';
import ServiceBooking from './components/Pages/ServiceBooking';
import Search from './components/Search';
import CheckRequest from './components/ServiceProvider/CheckRequest';
import CheckCustomer from './components/ServiceProvider/CheckCustomer';
import UpdateCustByAdmin from './components/Admin/UpdateCustByAdmin';
import CheckStatus from './components/Customer/CheckStatus';






function App() {
  return (
    <div>
     
        
        <Router>
          <Header />
            <div className='App'>
            
            <Switch>
          
               <Route exact path='/' component={Homepage } ></Route>
               <Route   path='/Contact' component={ContactUS} ></Route>
               <Route   path='/About' component={Aboutus } ></Route>

                <Route   path="/customers" component = {CustomerList } ></Route>
                <Route   path="/add-customer" component = {AddCustomer }></Route>
                <Route  path="/update-customer/:id" component = {UpdateCustomer }></Route>
                <Route  path="/updatecust/:id" component={UpdateCustByAdmin}></Route>
                <Route  path="/signup" component = {Signup }></Route>
                <Route  path="/login" component = {Login }></Route>
                <Route  path="/adminlogin" component = {AdminLogin  }></Route>
                <Route  path="/adminpage" component = {AdminPage }></Route>
                <Route  path='/ServiceProviders' component={ServiceProvidersList }></Route>
                <Route  path='/ServiceProviderSignUp' component={ServiceProviderSignUp }></Route>
                <Route  path='/update-ServiceProvider/:id' component={UpdateServiceProvider}></Route>
                <Route  path='/customerLogin' component={CustomerLogin }></Route>
                <Route  path='/customerpage' component={CustomerPage }></Route>
                <Route  path='/serviceProviderLogin' component={ServiceProviderLogin }></Route>
                <Route  path= '/serviceProviderPage' component={ServiceProviderPage}></Route>
                <Route path= "/Check-customer/:id" component={CheckCustomer}></Route>
                <Route  path='/feedback' component={ListFeedback }></Route>
                <Route path= '/cards' component={ServiceProviderCards}></Route>
                <Route path='/serviceBooking' component={ServiceBooking}></Route>
                <Route path='/search' component={Search}></Route>
                <Route path='/booking/:id' component={ServiceBooking}></Route>
                <Route path='/checkreq' component={CheckRequest}></Route>
                <Route path='/checkstatus' component={CheckStatus}></Route>
                
                
             </Switch>
             
            </div>
          <Footer />
          </Router>
          
     

      
    </div>

  );
}

export default App;
