import { Route, Switch } from "react-router-dom";
import Index from "./Index";

const Layout = () => {
    return (<div>
        <div id="visual">
            <div className="content-container"></div>
        </div>
        {/*<!-- --------------------------- <body> --------------------------------------- --> */}
        <div id="body">
            <div className="content-container clearfix">

                {/*<!-- --------------------------- aside --------------------------------------- -->*/}


                <aside className="aside">
                    <h1>관리자페이지</h1>

                    <nav class="menu text-menu first margin-top">
                        <h1>관리자메뉴</h1>
                        <ul>
                            <li><a href="/member/t">비밀번호 재발급</a></li>
                        </ul>
                    </nav>




                </aside>
                {/*<!-- --------------------------- main --------------------------------------- -->*/}
                <Switch>
                    <Route exact path="/admin/index" component={Index}/>                    
                </Switch>
            </div>
        </div>

    </div>);
}

export default Layout;
