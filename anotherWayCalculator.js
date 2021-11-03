var defaultString = "12/12"
// console.log(defaultString.slice(2,-1))
for(var i =0; i< defaultString.length ;i++){
  let elements = defaultString[i];
  if(elements == '+'){
    let additionOne = parseInt(defaultString.slice(0,i));
    let additionTwo = parseInt(defaultString.slice(i+1, defaultString.length));
    
    console.log(additionOne + additionTwo)
    
  }
  else if(elements == '-'){
    let additionOne = parseInt(defaultString.slice(0,i));
    let additionTwo = parseInt(defaultString.slice(i+1, defaultString.length));
    
    console.log(additionOne-additionTwo)
    
  }else  if(elements == '*'){
    let additionOne = parseInt(defaultString.slice(0,i));
    let additionTwo = parseInt(defaultString.slice(i+1, defaultString.length));
    
    console.log(additionOne*additionTwo)
    
  }
  else  if(elements == '/'){
    let additionOne = parseInt(defaultString.slice(0,i));
    let additionTwo = parseInt(defaultString.slice(i+1, defaultString.length));
    
    console.log(additionOne/additionTwo)
    
  }
}
