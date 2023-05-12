


// const http = require('http')
// const fs = require('fs')

// function requestHandler(req, res){
//     const html = fs.readFileSync("mi-archivo.txt");
//     const indexPath = 'index.html';
//     console.log(req.url)
//     if(req.url == `/${indexPath}`){
//     if(fs.existsSync(indexPath)){
//         const html =fs.readFileSync(indexPath);
//         res.writeHead(200, {'content-type': 'text/html'})
//     res.end(html);
//     }
//     }
    
    
//     res.writeHead(400)
//     res.end(html);
// }



// const server = http.createServer(requestHandler)

// module.exports = {server};
// //exports.default = server();//posible error
