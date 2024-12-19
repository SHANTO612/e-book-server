import express from 'express'
const app=express()
const port=process.env.PORT||8989
app.get('/',(request,response)=>{
response.send("<h1> hello this is our app</h1>")
})
app.get('/login',(request,response)=>{
    response.send("<h1> hello this is our Login page</h1>")
    })
app.listen(port,()=>{
    console.log(`application is running on port http://localhost:${port}`)
})