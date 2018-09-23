module.exports = function solveEquation(equation) {
  // your implementation
  var solution = [];

    var indexA = equation.indexOf('* x^2');
    var a = parseInt(equation.substring(0, indexA).trim(),10);

    var indexB = equation.lastIndexOf('* x');
    var b = parseInt(equation.substring(indexA + '* x^2'.length, indexB).split(" ").join(""),10);

    var c = parseInt(equation.substring(indexB + '* x'.length).split(" ").join(""), 10);

    var discriminant = b * b - 4 * a * c;
    var rootOfDiscriminant = Math.round(Math.sqrt(discriminant));

    solution[0] = (-b - rootOfDiscriminant)/(2*a);
    solution[1] = (-b + rootOfDiscriminant)/(2*a);

    if (solution[0] > solution[1]){
        var temp = solution[0];
        solution[0] = solution[1];
        solution[1] = temp;
    }

    return solution;
}
