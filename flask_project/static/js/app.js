function convert(){
    let m=document.getElementById('cm')
    let cm=m.value*100;
    let result="converted value :"+m.value+" m ="+" "+cm+" cm";
    document.getElementById('result').innerText=result
    
}

function split(){
    let amount=document.getElementById('amount');
    let persons=document.getElementById('persons');
    let bill ="Thank you "+persons.value+" for donating "+amount.value+" to the rescue fund!!";
    document.getElementById('result').innerText=bill
    amount.value='';
    persons.value='';
}