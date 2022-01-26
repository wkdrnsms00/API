const express = require("express"); //express node.js를 위한 웹 프레임워크 (API 개발에 사용)
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());
/// CRUD (Create, Read, Udate, Delete)
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
];
//Get
server.get("/api/user",(req, res)=>{ //모든 user 정보 가져오기
    res.json(users);
});

server.get('/api/user/:id', (req,res) => { // id Param 값으로 불러옴
    const user = users.find((u)=>{
        return u.id === req.params.id;
    });
    if (user){ // user 존재 할 때
        res.json(user);
    }else{ // user  존재하지 않을 때
        res.status(404).json({errprMessage : "User was not found"});
    }
});
//Post
server.post("/api/user",(req, res)=>{ // Postman 사용하여 data 추가
    users.push(req.body);
    res.json(users);
});

//Update
server.put('/api/user/:id', (req, res)=>{
    let foundIndex = users.findIndex(u=>u.id === req.params.id);
    if(foundIndex === -1){ // id 발견 못했을 경우
        res.status(404).json({errprMessage: 'User was not found'});
    }else{
        users[foundIndex] = {...users[foundIndex], ...req.body};
        res.json(users[foundIndex]);
    } 
});
//Delete
server.delete('/api/user/:id', (req, res)=>{
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404).json({errprMessage : "User was not found"});
    }else{
        let foundUser = users.splice(foundIndex,1); // foundIndex부터 1칸 제거
        res.json(foundIndex[0]);
    }
});
server.listen(3000, ()=>{ //서버 연동
    console.log("The server is running");
});

// http://localhost:3000/api/user (REST API 생성)

