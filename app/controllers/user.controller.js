const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    console.log('### 진행 4: 노드서버에 진입함 ####' + JSON.stringify(req.body))
    new UserSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
}
// exports.userlist = (req, res) => {
//     console.log(` ###  userController access ~~~~~~`)
//     UserSchema.find(userid: req.params.id)
//     .exec((err, users)=> {
//         if (err) return res.status(400).send(err)
//         res.status(200).json({success: true, users}) 
//     } )
// }

// exports.login = (req, res) => {
//     console.log(` ###  userController access ~~~~~~`)
//     UserSchema.find(userid: req.params.id, password: req.params.password)
//     .exec((err, users)=> {
//         if (err) return res.status(400).send(err)
//         res.status(200).json({success: true, users}) 
//     } )
// }