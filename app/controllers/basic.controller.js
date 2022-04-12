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