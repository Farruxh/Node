import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:"1",
            title:"No. 1",
            content:"It is first joke"
        },
        {
            id:"2",
            title:"No. 2",
            content:"It is second joke"
        },
        {
            id:"3",
            title:"No. 3",
            content:"It is third joke"
        },
    ]
    res.send(jokes);
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});
