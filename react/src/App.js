import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MoviesList';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import Register from './components/Register'
import { login,register } from './api/user';
import { useState } from 'react';
import LogOutButton from './components/LogOutButton';


const App = () =>{
 const [jwt, setJwt] = useState(false);

 const onLoginClick = (user, password) => {
   login(user,password)
    .then((jwt)=> setJwt(jwt))
    .catch((error) => console.log('falla'))
 }
 const onRegisterClick = (user, password) => {
  register(user,password)
   .then((jwt)=> setJwt(jwt))
   .catch((error) => console.log('falla'))
}
  
 return <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      {jwt ? <>
        <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
        <MovieList jwt={jwt} />
      </> : <>
      <Login onLoginClick={onLoginClick}/>
      <Register onRegisterClick={onRegisterClick}></Register></>}
      
    </Container>
  </Container> 
}

export default App;