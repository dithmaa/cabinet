import React from 'react';
import Login from '../Login/Login';


const LoginPage = () => {
    return(
        <div className={"container mt-5"}>
          <h2 className={"tac"}>Вход в личный кабинет</h2>
          <Login/>
        </div>
    )
}

export default LoginPage;