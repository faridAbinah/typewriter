const sentence = "hello there from lighthouse labs";
let delay = 1000;

for (const char of sentence) {
  


  setTimeout(() => {
    
    process.stdout.write(char);
    
  },delay += 500);

  

}
//We must use setTimeout the print a newline character because putting a newline character on this line will execute before callback function in setTimeout on line . This is because console.log is synchronous and the callback functions inside setTimeout are asynchronous.

setTimeout(() => {
  process.stdout.write("\n")
},delay + 500)


/**
 * console.log will add a newline character to the end of the string. In node we can use proccess.stdout.write to have more control.
 */