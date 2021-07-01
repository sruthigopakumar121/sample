import React, { useState } from "react";
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar";
import Customer from "./section/Customer";
import Dashboard from "./section/Dashboard";
import Reports from'./section/Reports';

function App() {
  const adminUser = {
    username:"admin",
    password:"admin123"
  }
  const [user, setUser] = useState({username:"",password:""});
  const [error, setError] = useState("");
  const Login = details=> {
  
 if(details.username==adminUser.username && details.password==adminUser.password){
  console.log("Logged in");
  setUser({username:details.username,password:details.password})

 }
 else{
  
  setError("Details not match")
 }

 }
const Logout = () => {
  
  setUser({username:"",password:""});
}
  return (
    <div className="App">
      {user.username !== "" ? (
        <div>
          <Router>
          <Navbar/>
          
          <div  className="welcome">
            <br></br>
          <h2>
            Welcome ,<span>{user.username}</span>
            <button onClick={Logout}>Logout</button>
          </h2>
          <br></br>
          <br></br>
          </div>
          <Switch>
            <Route path='/'  exact component={Dashboard}/>
            <Route path='/reports'component={Reports}/>
            <Route path='/customer'component={Customer}/>
          </Switch>
          </Router>
        </div>  
        
      ) : (
        <Loginpage Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

