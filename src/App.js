import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Tour from './Components/Tour/Tour';
import Destination from './Components/Destination/Destination';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import NewService from './Components/NewService/NewService';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Navbar></Navbar>
       <Header></Header>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path='/tour'>
           <Tour></Tour>
         </PrivateRoute>
         <PrivateRoute path="/destination">
           <Destination></Destination>
         </PrivateRoute>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <PrivateRoute path="/about">
           <About></About>
         </PrivateRoute>
         <PrivateRoute path="/contact">
          <Contact></Contact>
         </PrivateRoute>
         <PrivateRoute path="/newservice">
           <NewService></NewService>
         </PrivateRoute>
         <PrivateRoute path="/placeOrder/:serviceId">
           <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <PrivateRoute exact path ="/myOrders">
             <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/managerOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}



export default App;
 