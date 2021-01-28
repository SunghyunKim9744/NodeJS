// HTTP
// -networking
// -request, response
// -event
// -listening

// CONNECT
// -middleware
// -static 
// -bodyParser
// -...

// EXPRESS
// -routing
// -template view engine
// -web framework...

// let express = require("express");

// let app = express();
// app.listen(3000);
// // use(url,함수(입력,응답,다음으로 넘어갈건지))
// // 3000/index 로 요청이 왔을때 
// app.use("/index",(req,res,next)=>{
//     res.setHeader("Content-Type","text/html; charset=UTF-8");

//     res.end("Index Page입니다");
// })

// // 3000/hello 로 요청왔을 때
// app.use("/hello",(req,res,next)=>{
//     res.setHeader("Content-Type","text/html; charset=UTF-8");

//     res.end("Hello Page입니다");
// })
// console.log("서버가 시작되었습니다. localhost:3000");

// const http = require("http");
// const express = require("express");
// const homeController = require("./controllers/HomeController.js");
// let app = express();

// // http+express의 기능을 사용 
// let server = http.createServer(app);
// server.listen(3000);
// app.use("/index",(req,res,next)=>{
//     let list = [
//         {id:1, title:"hello"},
//         {id:2, title:"sads"}
//     ];
//     res.end("Hello Index");
// });

// /index , /customer/notice/list, edit ...
// 라우터롤 사용하지 않았을 때, -> url마다 호출되는 함수를 일일히 정해줘야함.
//app.use("/index",homeController.index);

// 라우터 사용
//app.use("/",homeController);


const http = require("http");
const express = require("express");
const homeController = require("./controllers/HomeController.js");
let app = express();
// ejs 경로 설정
console.log(__dirname);
const path = require("path"); // path ->운영체제에 맞는 구분자 경로
app.set("views",path.join(__dirname,"views"));
// http+express의 기능을 사용 
let server = http.createServer(app);
server.listen(3000);

app.use("/",homeController);


