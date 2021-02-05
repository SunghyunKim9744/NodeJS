import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import AuthStore from './reducers/AuthStore';
import AuthReducer from './reducers/AuthReducer';


// ----------------- 1------------------
 AuthStore.store = createStore(AuthReducer);
// AuthStore.store.subscribe(()=>{       // 상태가 바뀌었을 때 호출되는 이벤트, Header에서
//   console.log(AuthStore.store.getState());
// });

// console.log("sad");

// // 상태를 바꾸기, Login.js에서 사용
// AuthStore.store.dispatch({type:1,userName:"newlec"}); 
// AuthStore.store.dispatch({type:2,userName:"dragon"});

// ---------------- 2 -----------

// AuthStore.create();
// AuthStore.addEventListener((state)=>{
//   console.log(state);
// });
// console.log("sad");
// AuthStore.setState(1,{userName:"newlec"});
// AuthStore.setState(2,{userName:"dragon"});

// 아래와 동일 ------------ 3 ---------------

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
