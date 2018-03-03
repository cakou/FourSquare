const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static("./public"))
    .listen(port);
console.log('The magic happens on port ' + port);