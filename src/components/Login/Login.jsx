import React from 'react';
import css from './Login.module.css';
import {reduxForm} from 'redux-form';
import {Field} from 'redux-form';
import { authAPI } from '../../api/api';
import { connect } from 'react-redux';
// import {setFormData} from './../../redux/login-reducer';
import Header from '../Header/Header';
import { maxLengthCreator, minLengthCreator, requiredField } from '../../utils/validator/validators';
import { Input } from '../common/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const maxLengthCreator30 = maxLengthCreator(30);
const minLengthCreator5 = minLengthCreator(5);

const LoginForm = (props) => {

    return(
    <>
       
        
        <form className={css.form + ' flex fxdc'} onSubmit={props.handleSubmit}>
            <h2 className={css.formTitle}>
                Вход
            </h2>
            <div className={css.formInputs}>
                <div className={css.input}>
                    <h3 className={css.inputTitle}>Email: </h3>
                    <Field validate={[requiredField, maxLengthCreator30, minLengthCreator5]} type="text" name={"email"} placeholder={"Email"} component={Input} />
                </div>
                <div className={css.input}>
                    <h3 className={css.inputTitle}>Пароль: </h3>
                    <Field validate={[requiredField, maxLengthCreator30, minLengthCreator5]} type="password" name={"password"} placeholder={"Пароль"} component={Input}  />
                </div>
            </div>
            <div className={css.formButtons + ' flex jcsb aic'}>
                <label className={css.formCheckbox}>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
                    <span>Запомнить меня</span>
                </label>
                <input type="submit" className={css.formSignIn}>

                </input>
            </div>
            <a href="#" className={css.signupLink}>
                Регистрация
            </a>
            
        </form>
    </>

    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);

    }
    if(props.isAuth){ //true
        return <Navigate to={"/owncabinet"} />
        
    }
    
    return(
        <div className={css.login}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



export default connect(mapStateToProps, {login})(Login);