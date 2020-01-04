const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyPasrer=require('body-parser');

const app=express();
app.use(bodyPasrer.json());
app.use(morgan("dev"));
app.use(express.static(__dirname+"/public"));
const dishRoute=require("./routes/dishRoutes.js");
const promotionRoute=require("./routes/promotionRouter.js");
const leaderRoute=require("./routes/leaderRouter.js");
app.use("/leader",leaderRoute);
app.use("/promotion",promotionRoute);
app.use("/dishes",dishRoute);
app.use((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.end("<html><body><h1>This is Express Server</h1></body></html>");
});
const server=http.createServer(app);
server.listen(3000,()=>console.log("Liosten to Port 3000"));