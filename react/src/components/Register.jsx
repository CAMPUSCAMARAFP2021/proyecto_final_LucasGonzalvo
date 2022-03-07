import { useState } from "react";

const Register = ({onRegisterClick}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);

    return <>
    
    <body class="text-center">
    <main class="form-signin">
    
  
        <h1>Please register</h1>
        <div>
        <input type="text"id="username" name={user} onChange={inputUserHandler}></input><br/>
        <label for="username">Brand name</label>
        </div>
        <div>
        <input type="password"id="password" name={password} onChange={inputPasswordHandler}></input><br/>
        <label for="password">Password</label>
        </div>
        <button onClick={() => onRegisterClick(user,password)}>Register</button><br/><br/>
        
       
        </main>
        </body>
    </>
}

export default Register;