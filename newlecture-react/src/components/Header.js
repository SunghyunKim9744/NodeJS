import { Component } from "react";
import { Link } from "react-router-dom";
import SecurityContext from "./security/SecurityContext";
// ---------------- 1 ------------------
//import AuthStore from "../reducers/AuthStore";


// --------- 다른 방식 (Provider,Connect)
import { connect } from "react-redux";
class Header extends Component {

    constructor() {
        super();
        this.state = { authenticated: false };
        //console.log(this.state);
    }

    componentDidMount() {
        // ----------------- 1 전역 state:redux store를 전역객체로 사용------------------
        // AuthStore.store.subscribe(() => {  // 상태가 바뀌었을 때 호출되는 이벤트, Header에서
        //     let store = AuthStore.store.getState();
        //     this.setState({authenticated:store.userName?true:false});
        // });


    }

    logoutClickHandler(e) {
        this.props.logout();
        this.props.history.push("/index");
    }
    render() {
        let loginStateLink;

        let authenticated = this.props.userName ? true : false;
        if (authenticated != true)
            loginStateLink = <li><Link to="/member/login">로그인</Link></li>;
        else
            loginStateLink = <li><Link to="/member/logout" onClick={this.logoutClickHandler.bind(this)}>로그아웃</Link></li>;

        // ------ 전역 state:redux store를 전역객체로 사용
        // if (this.state.authenticated != true)
        //     loginStateLink = <li><Link to="/member/login">로그인</Link></li>;
        // else
        //     loginStateLink = <li><Link to="/member/logout">로그아웃</Link></li>;
        return <header id="header">

            {/* -------------- header ----------- */}
            <div className="content-container">

                <h1 id="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="뉴렉처 온라인" />

                    </Link>
                </h1>

                <section>
                    <h1 className="hidden">헤더</h1>

                    <nav id="main-menu">
                        <h1>메인메뉴</h1>
                        <ul>
                            <li><a href="/guide">학습가이드</a></li>

                            <li><a href="/course">강좌선택</a></li>
                            <li><a href="/answeris/index">AnswerIs</a></li>
                        </ul>
                    </nav>

                    <div className="sub-menu">

                        <section id="search-form">
                            <h1>강좌검색 폼</h1>
                            <form action="/course">
                                <fieldset>
                                    <legend>과정검색필드</legend>
                                    <label>과정검색</label>
                                    <input type="text" name="q" />
                                    <input type="submit" value="검색" />
                                </fieldset>
                            </form>
                        </section>

                        <nav id="acount-menu">
                            <h1 className="hidden">회원메뉴</h1>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                {loginStateLink}
                                <li><a href="/member/agree.html">회원가입</a></li>
                            </ul>
                        </nav>

                        <nav id="member-menu" className="linear-layout">
                            <h1 className="hidden">고객메뉴</h1>
                            <ul className="linear-layout">
                                <li><Link to="/admin/index"><img src="/images/txt-mypage.png" alt="마이페이지" /></Link></li>
                                <li><Link to="/customer/notice/list"><img src="/images/txt-customer.png" alt="고객센터" /></Link></li>
                            </ul>
                        </nav>

                    </div>
                </section>

            </div>

        </header>
    }
}

// ----------- 1 전역 state:redux store를 전역객체로 사용------------
//export default Header;


// ------------------- 다른 방식(Provider,Connect) =>전역 state를 connect로 연결해서 사용
const mapStateToProps = (store) => {
    return {
        userName: store.userName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout:()=>{
            dispatch({type:2}); // 로그아웃 type
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
