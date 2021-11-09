// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Rafael Diaz" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let addGinger = document.getElementById('add-gb')
let minusGinger = document.getElementById('minus-gb')
let minusCC = document.getElementById('minus-cc')
let addCC =  document.getElementById('add-cc')
let minusSugar = document.getElementById('minus-sugar')
let addSugar = document.getElementById('add-sugar')

let updateGbCount = 0
let updateCCcount = 0
let updateSugarCount = 0


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
addGinger.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    // console.log('Gingerbread + button was clicked!')
   if(addGinger){

    
    updateGbCount++;
    console.log(updateGbCount)
   }
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
 
minusGinger.addEventListener('click', function(){

    if(updateGbCount > 0){

        updateGbCount --; 
        console.log(updateGbCount)
    }


 })
// here CC starts

 addCC.addEventListener('click', function() {
    
   if(addCC){

    
    updateCCcount++;
    console.log(updateCCcount)
    
   }

})
 
minusCC.addEventListener('click', function(){

    if(updateCCcount > 0){

        updateCCcount --; 

        console.log(updateCCcount)
    }


 })

// here sugar starts

addSugar.addEventListener('click', function() {
    
    if(addSugar){
 
     
     updateSugarCount++;
     console.log(updateSugarCount)
     
    }
 
 })
  
 minusSugar.addEventListener('click', function(){
 
     if(updateSugarCount > 0){
 
         updateSugarCount --; 
 
         console.log(updateSugarCount)


     }
    })