const {signup , userlist} = require('../controllers/user.controller')
module.exports = x => {
    x.app.post(`${x.url}/sign-up`, signup) // x는 payload (데이터를 가지고 있는 파라미터)
    x.app.get(`${x.url}/userlist`, userlist)
}

/**
 * 
 * const {todo} = require('../controllers/todo.controller')
module.exports = x => x.app.post(`${x.url}/todo`, todo)
 */