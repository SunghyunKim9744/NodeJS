// import { createStore } from "redux";

// class AuthStore {
//     #store;
//     #callbackList;
//     constructor() {
//         this.#store = null;
//         this.#callbackList = [];
//     }

//     reducer(state = {userName:null}, action) {
//         switch (action.type) {
//             case 1: // 로그인 상태, Login.js에서 보내온 데이터
//                 return { ...state, userName: action.userName };
//             case 2: // 로그아웃 상태, Header.js에서 로그아웃을 한 상태
//                 return { ...state, userName: null };
//             default:
//                 return state;
//         }
//     }
//     create() {
//         this.#store = createStore(this.reducer);
//         this.#store.subscribe(()=>{
//             for(let cb of this.#callbackList){
//                 cb(this.#store.getState());
//             }
//         })
//     }
//     addEventListener(callback) {
//         this.#callbackList.push(callback);
//     }

//     setState(type, state) {
//         this.#store.dispatch({type, ...state});
//     }
// }
// export default new AuthStore();

export default {store:null};