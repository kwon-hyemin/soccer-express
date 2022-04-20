export default function BasicService() {

    return {
        getBmi(req, _res) {
            const {name, height, weight} = req.body
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            console.log(`이름 : ${name}`)
            console.log(`키 : ${height}`)
            console.log(`몸무게 : ${weight}`)
            const json = calcBmi({name, height, weight})
            console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
            return json
        }
    }

}
