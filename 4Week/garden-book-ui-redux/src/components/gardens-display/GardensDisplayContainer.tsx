import { connect } from "react-redux";
import { GardensDisplayComponent } from "./GardensDisplayComponent";
import { IState } from "../../reducers";

//ownProps are the props we pass in to the container when we make it
const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        user:state.login.user,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}

export default connect(mapStateToProps)(GardensDisplayComponent)