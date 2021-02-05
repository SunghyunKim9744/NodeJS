// const userPrincipal = {
//     userName:null
//     // authorities:[],
//     // defaultRole:"ROLE_MEMBER"
// };

function AuthReducer(state={unserName:null}, action) {
    switch (action.type) {
        case 1: // 로그인 상태, Login.js에서 보내온 데이터
            return {...state,userName:action.userName};
        case 2: // 로그아웃 상태, Header.js에서 로그아웃을 한 상태
            return {...state,userName:null};
        default:
            return state;
    }
    
}

export default AuthReducer;