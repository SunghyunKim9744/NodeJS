// exports.index = function(req,res,next) {
//     res.send("Hello Index World");
// }

// exports.help = function(req,res,next) {
//     res.send("help World");
// }

// 라우터 사용
const express = require("express");
const router = express.Router();
// send - > rest 
// router.get("/index",function(req,res,next) {
//     res.send("Hello Index World");
// });

// router.get("/help",function(req,res,next) {
//     res.send("Hello Help World");
// });

// 페이지(html페이지)를 반환 - > render - > controller

router.get("/index",function(req,res,next) {
    let list = [
        {id:1, title:"hello"},
        {id:2, title:"sads"}
    ];

    let count = 57;
    res.render("index.ejs", {list,count});
});

router.get("/list",function(req,res,next) {
    let list = [
        {id:1, title:"hello"},
        {id:2, title:"sads"}
    ];

    let count = 57;
    let model = {list,count};
    res.json(model);
});
module.exports = router;