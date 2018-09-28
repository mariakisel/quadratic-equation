module.exports = function solveEquation(equation) {

  const [a,b,c] = analysisEquation(equation);
    return getQuadratic(a,b,c);
}

function analysisEquation(equation) {
    // ax^2+bx+c
    const a = equation.split(' * x^2')[0];
        aSign = equation.split(a + ' * x^2')[0];
    
    const bSign = equation.split(a + ' * x^2 ')[1].charAt(0);
        b = equation.split(' * x^2 ' + bSign + ' ')[1].split(' * x ')[0];
    
    const cSign = equation.split(' * x ')[1].charAt(0);
        c = equation.split(' * x ' + cSign + ' ')[1];
    
    return [parseInt(aSign + a), parseInt(bSign + b), parseInt(cSign + c)];
}

function getQuadratic(a,b,c) {
  let coefficients = [];
  coefficients.push(getRoots('+', a,b,c));
  coefficients.push(getRoots('-', a,b,c));
  coefficients.sort((a, b) => a-b);
  return coefficients;
}

function getRoots(sign, a,b,c) {
    //x=(-b +- sqrt(b^2-4ac))/2a 
  let coefficient_b = parseInt(- + b);
  const denominator = 2*a;
  const numerator = Math.sqrt((b*b)-4*a*c);
  return Math.round((sign === '+') ? ((coefficient_b+numerator)/denominator) : ((coefficient_b-numerator)/denominator));
} 

