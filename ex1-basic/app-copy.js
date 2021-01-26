let connect = require("connect");

let app = connect();

app.listen("3000");

// use(url,함수(입력,응답,다음으로 넘어갈건지))
// 3000/index 로 요청이 왔을때 
app.use("/index",(req,res,next)=>{
    res.setHeader("Content-Type","text/html; charset=UTF-8");

    res.end("Index Page입니다");
})

// 3000/hello 로 요청왔을 때
app.use("/hello",(req,res,next)=>{
    res.setHeader("Content-Type","text/html; charset=UTF-8");

    res.end("Hello Page입니다");
})
console.log("서버가 시작되었습니다. localhost:3000");