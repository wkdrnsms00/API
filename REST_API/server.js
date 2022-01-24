const express = require("express");

const server = express();

const users = [
    {
        id : "test1",
        name : "MME",
        email :"kkzzzz@naver.com"
    },
    {
        id : "test2",
        name : "RARK",
        email : "eeeWWW12@gamil.com"
    }
]

server.get("/api/user",(req,res)=>{ //모든 user 정보 가져오기
    res.json(users);
})

server.post("/api/user",(req, res)=>{ // data get
    res.json(users)
})

server.listen(3000, ()=>{ //서버 연동
    console.log("The server is reunning");
});

// http://localhost:3000/api/user (REST API 생성)

