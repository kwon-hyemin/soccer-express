exports.getBmi = (payload) => {
  const {name, height, weight} = payload
  let _height = Number(height) / 100
  let _weight = Number(weight)
  let bmi = _weight / Math.pow(_height, 2)
  let output = Math.round(bmi * 100) / 100
  console.log(output)
  const result = {name, height, weight} // 구조화 structuring
  if (output < 18.5)
    result.bmi = "Underweight"
  else if (output <= 25)
    result.bmi = "Normal"
  else if (output <= 30)
    result.bmi = "Obese"
  else
    result.bmi = "Overweight"
  return result
}

exports.calculate = (payload) => {
  const {num1, opcode, num2} = payload
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, opcode, num2}
  switch(opcode) {
      case '+' : result.res = _num1 + _num2; break;
      case '-' : result.res = _num1 - _num2; break;
      case '*' : result.res = _num1 * _num2; break;
      case '/' : result.res = _num1 / _num2; break;
      case '%' : result.res = _num1 % _num2; break;
  }
  return result
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

exports.calculate = (payload) => {
  const {num1, opcode, num2} = payload
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, opcode, num2}
  switch(opcode) {
      case '+' : result.res = _num1 + _num2; break;
      case '-' : result.res = _num1 - _num2; break;
      case '*' : result.res = _num1 * _num2; break;
      case '/' : result.res = _num1 / _num2; break;
      case '%' : result.res = _num1 % _num2; break;
  }
  return result
}