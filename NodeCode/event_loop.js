const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("welcome to the server")
        return res.end()
    }
    //task
    if(req.url === '/about'){

        // for(let i = 0; i<1000;i++){
        //     console.log(Math.random()*i)
        // }
        return res.end("about page")

    }

    res.end("not found")
})

server.listen(3000)
console.log("on port 3000")