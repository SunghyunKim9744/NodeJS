import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import SecurityContext from "./SecurityContext";

class AuthorizedRoute extends Component {

    render() {
        let { path, component: Target,location } = this.props;

        if (SecurityContext.userName == null) // 인증이 된적이 없다면
            return (
                <Redirect to={
                    {
                        pathname: "/member/login",
                        state: {
                            returnURL: location.pathname
                        }
                    }
                } />
            );

        else // 인증이 됐다면
            return (<Route path={path} component={Target} />);

    }
}


export default AuthorizedRoute;