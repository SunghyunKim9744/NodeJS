import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import SecurityContext from "./SecurityContext";
import AuthStore from "../../reducers/AuthStore";

class AuthorizedRoute extends Component{
  
  render(){
      let store = AuthStore.store.getState();
      let authenticated = store.userName?true:false;
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

export default AuthorizedRoute;