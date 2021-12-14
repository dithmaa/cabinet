import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthUserData, logout} from '../../redux/auth-reducer.js';
import * as axios from 'axios';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.getAuthUserData();
      
    }
    render(){
        return(<Header {...this.props}/>);
    }
}


const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        authAvatar: state.auth.authAvatar
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);