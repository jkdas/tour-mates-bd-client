import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import PackageDetails from './components/PackageDetails/PackageDetails';
import TourPackges from './components/TourPackages/TourPackges';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddNewPackage from './components/AddNewPackage/AddNewPackage';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManagaeAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/packages">
              <TourPackges></TourPackges>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/addNewPackage">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/package/:tourId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
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
