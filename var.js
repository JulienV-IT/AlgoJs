
exports.sayHello = function (hello) {
  return hello;
  console.log(hello);
};




exports.addition = function(x,op,y){
  if(op == "+"){
    var z = x + y;
    return z;
  } else {
    console.log("nope is not an addition");
  }

}
