const IndexContent=()=>{
    return (
        <div>
            <div id="visual" className="">
                <div className="content-container">
                    <h2 className="hidden">신규 강좌목록</h2>                   
                    <ul className="banner">
        
        
                        <li className="banner1">
                            <a href="customer/event/1">
                                <img src="admin/board/event/1/banner-java.png" data-id="1" style={{cursor: "pointer"}} />
                            </a>
                        </li>
        
                    </ul>
        
        
                    <ul className="banner-button-list" style={{color:"#ffff00", fontSize:"20px", position:"absolute", left:"10px", bottom:"5px", zIndex: "100px", display: "flex", flexDirection: "row"}}>
                        <li></li>
                    </ul>
        
                </div>
        
            </div>
            <div id="notice">
                <div className="content-container">
                    <span className="title">제대로된 전문가들이 만들어가는 <span style={{color:"yellow",fontSize:"15px"}}>IT PROFESSIONAL <span style={{color:"#00ffff"}}>NEW</span>
                            ONLINE <span style={{color:"#00ffff"}}>LECTURE</span> MARKET</span></span>
                    
                </div>
            </div>
            {/*<!-- ----- 공지사항 줄 ------------------------------------------------------------------------------ -->*/}
            <div id="information">
                <div className="content-container">
                    <section className="guide">
                        <h1 className="title">강의 플레이어 사용방법 안내</h1>
                        <div className="margin-top">
                            <a href="customer/faq/1"><img src="images/customer/installInfo.png" /></a>
                        </div>                        
                    </section>
                    <section className="course-info">
                        <h1 className="title text-center">뉴렉처 하이브리드 과정 모집</h1>
                        <ul className="list">
                            <li>현재 모집 과정이 없습니다.</li>
                        </ul>
                    </section>
                    <section className="notice">
                        <h1 className="title">공지사항</h1>
                        <ul className="list margin-top">
        
                            <li>
                                <span className="notice-title">
                                    <a href="notice/detail.html">스프링 8강까지의 예제 코드</a>
                                </span>
                                <span>2019-08-18</span>
                            </li>
        
                            <li>
                                <span className="notice-title">
                                    <a href="notice/detail.html">스프링 DI 예제 코드</a>
                                </span>
                                <span>2019-08-15</span>
                            </li>
        
                            <li>
                                <span className="notice-title">
                                    <a href="notice/detail.html">뉴렉쌤 9월 초 국기과정 모집 안내</a>
                                </span>
                                <span>2019-06-11</span>
                            </li>
        
                            <li>
                                <span className="notice-title">
                                    <a href="notice/detail.html">뉴렉처 강의 수강 방식 안내</a>
                                </span>
                                <span>2019-05-24</span>
                            </li>
        
                            <li>
                                <span className="notice-title">
                                    <a href="notice/detail.html">자바 구조적인 프로그래밍 강의 예제 파일</a>
                                </span>
                                <span>2019-04-24</span>
                            </li>
        
                        </ul>
                    </section>
                </div>
            </div>
        
            
            <main id="course">
                <section className="content-container list list-horizontal list-course list-course-index">
                    <h1>온라인 <span className="color-orange">단과 과정</span></h1>
                    <div>
                    
                    </div>
        
                    <ul>
                        
                        <li className="item-course normal event">
                            <div>
                                <a href="course/2"><img src="images/course/java.png" /></a>                        
                            </div>
                            <div>
                                <div>
                                    <a href="course/2"><span className="text-strong text-ellipsis">자바 프로그래밍</span></a>
                                </div>
                                <div className="price">
                                    <span className="normal deprecated">
                                        <span className="text-gray">
                                            22,000
                                        </span> 원
                                    </span> <span className="event">
        
        
                                        <span className="color-red text-strong">
                                            0
                                        </span>원
        
        
                                    </span>
                                </div>
                                <div className="footer text-strong">
                                    <span className="writer">선생님 : newlec </span>
                                    <span className="update">개설일 : 2019-09-07
                                    </span>
                                </div>
                            </div>
                        </li>
        
        
                    </ul>
        
                    <div className="more">
                        
                    </div>
                </section>
        
                        
                <div className="content-container">
                    <h3 className="-text- center green bold -margin- top">협력업체</h3>
                    <ul className="-list- horizontal center -margin- bottom top b20">
                        <li><a target="_blank" href="http://www.notepubs.com"><img src="images/notepubs.png" alt="노트펍스" /></a></li>
                        <li><a target="_blank" href="http://www.namoolab.com"><img src="images/namoolab.png" alt="나무랩연구소" /></a></li>                
                    
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default IndexContent;