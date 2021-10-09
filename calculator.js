let myCalc = (() => {
  let elements = []
  let result
  const selectOperator = new Map()
  const list = new Map()

  const addition = (n1, n2) => n1 + n2
  const subtraction = (n1, n2) => n1 - n2
  const multiplication = (n1, n2) => n1 * n2
  const division = (n1, n2) => n2 > 0 ? n1 / n2 : NaN

  selectOperator
    .set("+", addition)
    .set("-", subtraction)
    .set("*", multiplication)
    .set("/", division)

  const enter = elementValue => { elements = [...elements, elementValue] }

  const equals = () => {
    let [n1, operator, n2] = elements
    let operation = selectOperator.get(operator)
    result = operation(n1, n2)
    list.set(elements.join(""), result)
    elements = []
    return result;
  }

  const operationList = () => list
  const reset = () => { elements.length = 0 }

  return {
    enter,
    equals,
    operationList,
    reset,
  }


})()

//exemple
myCalc.enter(9);
myCalc.enter("/");
myCalc.reset()
myCalc.enter(9);
myCalc.enter("*");
myCalc.enter(5);
console.log(myCalc.equals());
myCalc.enter(23);
myCalc.enter("/");
myCalc.enter(0);
console.log(myCalc.equals());
console.log(myCalc.operationList());

