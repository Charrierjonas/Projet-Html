const http = require('http');
const port=8080

const httpServer = http.createServer(function(req,res){

})

// On écoute sur le port 8080
httpServer.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }
    else{
        console.log('Server is listening on port'+port)
    }

});