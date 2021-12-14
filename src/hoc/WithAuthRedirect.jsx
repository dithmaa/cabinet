import React from 'react';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => { // создаём новый mapStateToProps, чтобы каждый раз не передавать isAuth
    return{
        isAuth: state.auth.isAuth,
    }
}

export const WithAuthRedirect = (Component) => { // приходит компонента в виде аргумента

    class RedirectComponent extends React.Component { // классовая компонента
        render() {
            if(!this.props.isAuth){return(<Navigate to={'/login'}/>)} // если не зареган то на логин
            return(<Component {...this.props}/>) // если зареган показать компоненту и передать пропсы
        }
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent); // обернём connect чтобы передать mapStateToProps

    return ConnectedAuthRedirectComponent; 

}
