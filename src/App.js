import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/HomePage/Footer/Footer';
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginRegistration/Login/Login';
import PrivateRoute from './components/LoginRegistration/PrivateRoute/PrivateRoute';
import Registration from './components/LoginRegistration/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import AllProducts from './components/ProductPage/AllProducts/AllProducts';
import Order from './components/ProductPage/Order/Order';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/all-products">
              <AllProducts></AllProducts>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/order/:packageId">
              <Order></Order>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Registration></Registration>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
