let  istatus = document.querySelector(".dcrp")
var remove = document.querySelector(".remove")
var addFirend = document.querySelector(".add")
var flag = 0

addFirend.addEventListener("click",function()
{
  if(flag == 0) {
    setTimeout(() => {
      
      istatus.style.color = "black "
      
      istatus.innerHTML = "Friends"
      addFirend.innerHTML = " Cencel Request"
    }, 450);
    
    
    flag = 1
  } else {
    setTimeout(() => {
      
      addFirend.innerHTML = "Add Friend"
      addFirend.innerHTML = "cencel"
      istatus.innerHTML = "Request Cenceled"
    }, 450);
      flag = 0
  }
})




// let  istatus = document.querySelector(".dcrp")

// var addFirend = document.querySelector(".add")

// addFirend.addEventListener("click",function()
// {
//   istatus.style.color = "black "
//   istatus.innerHTML = "Friends"
//    addFirend.innerHTML = "Friends"
// })


// var remove = document.querySelector(".remove")

// remove.addEventListener("click", function() {
//   remove.innerHTML = "cencel"
//   istatus.innerHTML = "Cencel Request"
//   remove.style.backgroudColor = "aqua"
// })




//// profile-page 2

var istatus2 = document.querySelector(".decp")


var addFirend2 = document.querySelector(".add2")

addFirend2.addEventListener("click",function()
{
  istatus2.style.color = "black "
  istatus2.innerHTML = "Friends"
   addFirend2.innerHTML = "Friends" 
})



var remov = document.querySelector(".remove2")

remov.addEventListener("click", function() {
  remov.innerHTML = "cencel"
  istatus2.innerHTML = "Cencel Request"
  remov.style.backgroudColor = "red"
})

