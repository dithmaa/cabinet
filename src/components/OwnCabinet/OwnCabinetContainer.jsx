import React from "react";
import { connect } from "react-redux";
import {getUsersThunk, addUserThunk, removeUserThunk} from '../../redux/cabinet-reducer';
import OwnCabinet from "./OwnCabinet";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";


class OwnCabinetContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getUsersThunk();
    }
    render() {
        return (
            <OwnCabinet {...this.props} />
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.cabinetPage.users
    }
}
export default WithAuthRedirect(connect(mapStateToProps,{getUsersThunk,addUserThunk, removeUserThunk})(OwnCabinetContainer));