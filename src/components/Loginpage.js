import React,{ useState} from "react";

function Loginpage({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  
  const submitHandler = e => {
    e.preventDefault();
    Login(details);

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {
            (error !="")?(<div className="error">{error}</div>):""
        }
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={e=>setDetails({...details,username:e.target.value})} value={details.username}></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}></input>
        </div>
        <input type="submit" value="Login" name="" id="" />
      </div>
      
    </form>
  );
}

export default Loginpage;
