import http from "http";
// import * as teams from 'team.js';
import { addTeam, getAllTeams } from "./teams.js";

const PORT = 5001;

const sendJson = (res, statusCode,data)=>{
    res.writeHead(statusCode,{"content-type":"application/json"});
    res.end(data === undefined ? '' : JSON.stringify(data));
};

const parseJSONBody = (req)=>{
    return new Promise((resolve,reject)=>{
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });
        req.on('end', ()=>{
            try{
                resolve(body ? JSON.parse(body):{});
            }catch (error){
                reject(error);
            }
        });
        });
};

const server = http.createServer(async (req,res)=>{
    const { pathname, query} = parseurl(req.url, true);
    const {method} = req;
    console.log("pathname:",pathname);
    console.log("query:",query);
    console.log("Method:",method);

    if(pathname === "/api/v1/teams" && method === "GET"){
        let teams = getAllTeams();
        return sendJson(res, 200, teams);
    }else if(pathname === "api/v1/teams" && method == "POST"){
        const newTeam = await parseJSONBody(req);
        const team = addTeam
        res.statusCode = 404;
    }
    res.end();
});
server.listen(PORT,()=>{
    console.log("SIH Server is running at ", PORT);
});