const { game } = require('../controllers/game.controller');
module.exports = x => x.app.post(`${x.url}/game`, game); 