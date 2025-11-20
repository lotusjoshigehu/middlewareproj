const express=require('express')
const app=express()

const mware= (req,res,next)=>
{
    req.user="Guest"
    next()
}

app.get('/welcome',mware,(req,res)=>
{
    res.send(`<h1>Welcome,${req.user}!</h1>`)
})

app.listen(3600,()=>
{
    console.log("server is running")
})