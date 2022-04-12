const {getBmi, calculate, getGrade} = require('../services/basic.service')

exports.bmi = (req, res) => {
  res.status(200).json(getBmi(req.body))
}

exports.calc = (req, res) => {
  res.status(200).json(calculate(req.body))
}

exports.grade = (req, res) => {
  res.status(200).json(getGrade(req.body))
}

exports.getGrade = (payload) => {
  const {name, kor, eng, math} = payload
  let _kor = Number(kor)
  let _eng = Number(eng)
  let _math = Number(math)
  let avg = (_kor + _eng +_math) / 3.0
  const result = {name, kor, eng, math}
  if (avg >= 60.0)
      result.res = "합격"
  else
      result.res = "불합격"
  return result
}