const {todo} = require('../controllers/todo.controller')
module.exports = x => x.app.post(`${x.url}/todo`, todo)