
function joined(){
    // console.log("joined")
    let title=document.getElementById('title');
    let btn=document.getElementById('btn');
    btn.style.display='none'
    title.innerText='Thanks for joining!'
    
   
    // console.log(title)
}
let counter=0;
function increment(){
    counter=counter+1;
    document.getElementById('counter').innerText=counter
}
// function decrement(){
//     if(counter>0){
//         counter=counter-1;
//         document.getElementById('counter').innerText=counter
//     }
 
// }

// Select the counter element
const counterElement = document.getElementById('counter');
const lifesaved=document.getElementById('count');

// Initialize the counter value
let counterValue = 0;
let lifevalue=0;

// Function to update the counter
function updateCounter() {
    counterValue++; // Increase the counter value by 1
    counterElement.textContent = counterValue; // Update the displayed value

   
}
function updatelife(){
    lifevalue++;
    lifesaved.textContent=lifevalue;
}
// Call updateCounter every 5 seconds (1000 milliseconds)
setInterval(updateCounter, 2000);
setInterval(updatelife,6000)

