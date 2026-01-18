// Example file with intentional linting errors
const unusedVariable = "This uses double quotes";

function badFunction() {
  let unused = "unused variable";
  console.log("Another double quote string");
  return "no semicolon"
}

badFunction();