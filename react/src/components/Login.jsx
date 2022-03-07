import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);
    
    
    return <>
    
    <body class="text-center">
    <main class="form-signin">
    
  
        <h1>Please sign in</h1>
        <div>
        <input type="text"id="username" name={user} onChange={inputUserHandler}></input><br/>
        <label for="username">Brand name</label>
        </div>
        <div>
        <input type="password"  id="password" name={password} onChange={inputPasswordHandler}></input><br/>
        <label for="password">Password</label>
        </div>
        <button onClick={() => onLoginClick(user,password)}>Login</button><br/><br/>
        
       
        </main>
        
        </body>
    </>
}

export default Login;