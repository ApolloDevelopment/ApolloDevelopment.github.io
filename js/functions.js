console.log('Functions:\n\n- getHypotenuse(a, b) //gets the value of the hypotenuse with the given A and B leg lengths\n\n- getMissingLeg(b, c) //gets the length of a missing side if the hypotenuse is given\n\n- getRelation(a, b, c) //gets the relationship of a triangle (obtuse, acute, right) based on its length measurements');

var C = 0;
function getHypotenuse(a, b) {
  C = (((a *= a) + (b *= b)) ** 0.5);
  return C;
}

var A = 0;
function getMissingLeg(b, c) {
  A = (((c *= c) - (b *= b)) ** 0.5);
  return A;
}

var relation = undefined;
var relationC = undefined;
var relationAB = undefined;
function getRelation(a,b,c) {
  relationC = (c *= c);
  relationAB = ((a *= a) + (b *= b));
  if(relationC > relationAB) {
    relation = "Obtuse";
    return relation;
  } else if(relationC < relationAB) {
    relation = "Acute";
    return relation;
  } else {
    relation = "Right";
    return relation;
  }
}
