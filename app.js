import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import db from './app/models/index.js'

async function startApp() {
    dotenv.config() // 전역, dotenv : 환경
    const app = express()
    const mongoUri = process.env.MONGO_URI
    const port = process.env.PORT
    app.use(express.static('public'))
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use(cors())
 

    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }


    db.mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('### MongoDB 연결 성공 ###')
        })
        .catch(err => {
            console.log('MongoDB와 연결 실패', err)
            process.exit()
        })
        app
        .listen(port, () => {
            console.log('***************** ***************** *****************')
            console.log('***************** ***************** *****************')
            console.log('********** 서버가 정상적으로 실행되고 있습니다 **********')
            console.log('***************** ***************** *****************')
            console.log('***************** ***************** *****************')
        })

    app.get('/', (req, res) => {
        res.json({"현재 시간 : ": new Date().toLocaleString()})
    })

    app.get('/api/now', cors(corsOptions), (req, res) => {
        res.json({"now": new Date().toLocaleString()})
    })
}
startApp()