import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import IndexContent from "./components/IndexContent";
import Footer from "./components/Footer";
import CustomerLayout from "./components/customer/Layout";
import MemberLayout from "./components/member/Layout";
import AdminLayout from "./components/admin/Layout";
import AuthorizedRoute from "./components/security/AuthorizedRoute";



function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <IndexContent /> */}
          {/* <CustomerLayout /> */}
          {/* path에 따라 꼽힐게 달라짐. */}
          <Route exact path="/" component={IndexContent} />
          <Route path="/member" component={MemberLayout} />
          <Route path="/customer" component={CustomerLayout} />
          {/* 인증 하기 위한 라우트 */}
          <AuthorizedRoute path="/admin" component={AdminLayout}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
