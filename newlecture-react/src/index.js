import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {createStore} from 'redux';
// import AuthStore from './reducers/AuthStore';
// import AuthReducer from './reducers/AuthReducer';


// ----------------- 1 전역 state:redux store를 전역객체로 사용------------------
//AuthStore.store = createStore(AuthReducer);
// AuthStore.store.subscribe(()=>{       // 상태가 바뀌었을 때 호출되는 이벤트, Header에서
//   console.log(AuthStore.store.getState());
// });

// console.log("sad");

// // 상태를 바꾸기, Login.js에서 사용
// AuthStore.store.dispatch({type:1,userName:"newlec"}); 
// AuthStore.store.dispatch({type:2,userName:"dragon"});

// ---------------- 2 => 1번을 집중화하여 클래스로 만듬-----------

// AuthStore.create();
// AuthStore.addEventListener((state)=>{
//   console.log(state);
// });
// console.log("sad");
// AuthStore.setState(1,{userName:"newlec"});
// AuthStore.setState(2,{userName:"dragon"});

// 아래와 동일 ------------ 3(전역X) ---------------

// import AuthReducer from './reducers/AuthReducer';

// import {createStore} from 'redux';
// const store = createStore(AuthReducer);
// store.subscribe(()=>{       // 상태가 바뀌었을 때 호출되는 이벤트, Header에서
//   console.log(store.getState());
// });

// console.log("sad");

// // 상태를 바꾸기, Login.js에서 사용
// store.dispatch({type:1,userName:"newlec"}); 
// store.dispatch({type:2,userName:"dragon"});


// ------------ 다른 방식(Provider,Connect) => 전역 state를 connect로 연결해서 사용-------------
import {createStore} from 'redux';
import AuthReducer from './reducers/AuthReducer';
import {Provider} from "react-redux";

const store = createStore(AuthReducer);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
