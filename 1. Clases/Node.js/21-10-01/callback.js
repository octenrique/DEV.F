// function  myFunction(){
//   console.log("Soy una funcion")
// }

// function myOtherFunction(callback){
//   callback()
// }

// myOtherFunction(myFunction)

function f1 (){
  console.log(1)
}

function f2(callback){
  setTimeout(()=> {
    console.log(2)
    callback()
  }, 2000)
}

function f3 (){
  console.log(3)
}

f1()
f2(f3)