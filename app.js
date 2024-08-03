const { log } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("At Home page.")
    }
    if(req.url === '/about'){
        res.end("At about page !!!")
    }
    res.end(`
        <h1> oops not found sorry</h1>
        <p> cnat find the page </p>`
    )
   
  });
const port = 3000;

server.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});