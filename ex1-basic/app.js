// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What do you think of Node.js?', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// });

// console.log("asdasd");

let test = require("./js/test");

function f1() {
    console.log("메인");
}
test.f1();

f1();

let fs = require("fs");

fs.readFile("js/test.js","UTF-8",(err,data)=>{
    console.log(data);
});

console.log("파일입출력");

let http=require("http");

let server = http.createServer();
server.on("request",(request,response)=>{
    //console.log("요청이 왔습니다");
    fs.readFile("./index.html","UTF-8",(err,data)=>{
        response.writeHead(200,{
            "Content-Type":"text/html; charset=UTF-8"});
        response.write(data);
        response.end();
    });
    // 200 - > 상태값(정상)
    // response.writeHead(200,{
    //     "Content-Type":"text/html; charset=UTF-8"});
    // response.write("응답");
    // response.end();
});

server.listen(6000);