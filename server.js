const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static("./public"))
    .listen(port);
console.log('Le serveur démarre sur le port ' + port);