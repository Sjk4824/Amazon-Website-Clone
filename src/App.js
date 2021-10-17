import React, {useEffect} from "react"; 
import './App.css';
import Header from "./Header"; 
import Home from "./Home"; 
import Checkout from "./Checkout"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Login from "./Login"; 
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"; 
import {loadStripe} from "@stripe/stripe-js"; 
import {Elements} from "@stripe/react-stripe-js"; 
import Orders from "./Orders"; 

function App() {

  const promise = loadStripe('pk_test_51JlFItSHFR9c1cTSTO7QkjhKytXemYls5vRAbTJMmqnEkpOlYiRwRkjHbH80aoYbSrPDwt49OweK6r4KMk3xLv5b00cIvuqJVP');

  const [{}, dispatch] = useStateValue(); 
  useEffect(()=>{
    //since the bracket is empty, this runs once when the page loads. 
    auth.onAuthStateChanged(authUser => {
      console.log("The auth user is>>>>", authUser)

      if(authUser){
        //the user just logged in/ user is already logged in
        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      }
      else{
        //case when user is logged out. 
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    }) //so if we login, logout it will fire this code. 
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
