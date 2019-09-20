const Router = require('express');
var routes = Router();

routes.get('/', (req, res) => {
    res.send('listening on por 3000');
});

module.exports = routes;