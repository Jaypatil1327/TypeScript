// null is object in js/ts


import data from "./dummy.json" with {type : 'json'};
console.log(data);

function checkType(x: unknown) {
  switch (typeof x) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return x;
    case "undefined":
      return undefined;
    case null:
      return null;
    default:
      return "object";
  }
}

console.log(
    checkType("string") , 
    checkType(12) , 
    checkType(10n) , 
    checkType(Symbol("jfm")), 
    checkType({}) , 
    checkType(null) ,
    checkType(undefined), 
    checkType(() => {}) , 
    checkType(false)
);


function checkTypeOfNonPrimitive(x : unknown) {
    // array , error , object , date 
    if(Array.isArray(x)) return "Array" ;
    if(x instanceof Error) return 'Error' ; 
    if(x instanceof Date) return 'Date' ;
    if(x instanceof Object) return 'Object' ; 
     
    else return 'Pta nhi bhai ky hi cheez hai'
}

console.log(
    checkTypeOfNonPrimitive([1,2,3,4]),
    checkTypeOfNonPrimitive({1:1}),
    checkTypeOfNonPrimitive(new Date()),
    checkTypeOfNonPrimitive(new Error()),
);

// in second case everything is instance of Object but parallel to their own instance 