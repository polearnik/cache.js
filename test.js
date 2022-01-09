let redis_config = {
    db: process.env.REDIS_DB,
    host: process.env.REDIS_HOST,
};

const redis = require("redis").createClient(redis_config);

app = require('express')();
server = require('http').Server(app);
server.listen(message.port, '127.0.0.1');

app.get('/', function(request, response) {
    response.end(' Hello!!');
});

app.get('/get', function(request, response) {
    redis.get(request.query.key, function(error, data) {
        response.end(data);
    })
});

app.get('/put', function(request, response) {
    redis.set(request.query.key, request.query.data, function(error, data) {
        response.end('ok');
    })
});