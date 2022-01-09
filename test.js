let redis_config = {
    db: process.env.REDIS_DB,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
};

const redis = require("redis").createClient(redis_config);

app = require('express')();
server = require('http').Server(app);
server.listen('9696', '127.0.0.1');

app.get('/', function(request, response) {
    response.end(' Hello!!');
});

app.get('/get', function(request, response) {
    redis.get(request.query.key, function(error, data) {
        if (error) {
            response.end(error);
            return
        }
        response.end(data);
    })
});

app.get('/put', function(request, response) {
    redis.set(request.query.key, request.query.data, function(error, data) {
        if (error) {
            response.end(error);
            return
        }
        response.end('ok');
    })
});