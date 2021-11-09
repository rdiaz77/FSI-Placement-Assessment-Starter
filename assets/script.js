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
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
addGinger.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    // console.log('Gingerbread + button was clicked!')
   if(addGinger){

    
    updateGbCount++;
    total++;
    // console.log(updateGbCount)
    document.getElementById('qty-gb').innerHTML = (updateGbCount);
    document.getElementById('qty-total').innerHTML = (total);
   }
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
 
minusGinger.addEventListener('click', function(){

    if(updateGbCount > 0){

        updateGbCount --; 
        total--;
        // console.log(updateGbCount)
        document.getElementById('qty-gb').innerHTML = (updateGbCount);
        document.getElementById('qty-total').innerHTML = (total);
    }


 })
// here CC starts

 addCC.addEventListener('click', function() {
    
   if(addCC){

    
    updateCCcount++;
    total++;
    // console.log(updateCCcount)
    document.getElementById('qty-cc').innerHTML = (updateCCcount);
    document.getElementById('qty-total').innerHTML = (total);
    
   }

})
 
minusCC.addEventListener('click', function(){

    if(updateCCcount > 0){

        updateCCcount --; 
        total--;
        document.getElementById('qty-cc').innerHTML = (updateCCcount);
        document.getElementById('qty-total').innerHTML = (total);

        // console.log(updateCCcount)
    }


 })

// here sugar starts

addSugar.addEventListener('click', function() {
    
    if(addSugar){
 
     
     updateSugarCount++;
     total++;
    //  console.log(updateSugarCount)
    document.getElementById('qty-sugar').innerHTML = (updateSugarCount);
    document.getElementById('qty-total').innerHTML = (total);
     
    }
 
 })
  
 minusSugar.addEventListener('click', function(){
 
     if(updateSugarCount > 0){
 
         updateSugarCount --; 
         total--;
         document.getElementById('qty-sugar').innerHTML = (updateSugarCount);
         document.getElementById('qty-total').innerHTML = (total);
        //  console.log(updateSugarCount)


     }
    })

    