// Immediately Invoked Function Expressions (IIFE)

// syntax: (funciton{})(function execution immediately/calling function)
// functions that gets executed immediately,
// we get problem/pollution from global scope (whatever variables declared in global
// can cause harm to functions written global variables can be accessed from by any
// so we use IIFE to solve this issue
(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// function execution by IIFE will raise an error if (;) is not used,
// it tells our execution of IIFE ends here
// with execution we can give parameters like we give in all function
((name) => {
  // unname IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// +++++++++++++++++IMPORTANT+++++++++++++++
// when using two IIFE we have to write semi-colon(;) at the end of each IIFE,
// while we can avoid this to the last IIFE as there is not statement written after this
// and this works fine, as JS intrepreter does it itself, but have always write (;)
