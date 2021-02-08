import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import SecurityContext from "./SecurityContext";
import AuthStore from "../../reducers/AuthStore";
import { connect } from "react-redux";

class AuthorizedRoute extends Component{
  
  render(){

     // 방법2 : 전역 state:redux store를 전역객체로 사용
      // let store = AuthStore.store.getState();
      // let authenticated = store.userName?true:false;

      // 방법 3 : 전역 state를 connect로 연결해서 사용
      let authenticated = this.props.userName?true:false;
      let {path,component:Target,location} = this.props;
      
      if(!authenticated) // 인증이 된적이 없으면
        return (
          <Redirect to={
                        {
                          pathname:"/member/login",
                          state:{
                            returnURL:location.pathname
                          }
                        }
                      } />
        );
      else
        return (
          <Route path={path} component={Target} />
        );
  }
}

//export default AuthorizedRoute;

// ------------------- 다른 방식(Provider,Connect) =>전역 state를 connect로 연결해서 사용
const mapStateToProps = (store) => {
  return {
      userName: store.userName
  }
};

const mapDispatchToProps = (dispatch) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);