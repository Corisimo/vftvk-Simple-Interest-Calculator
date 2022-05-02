function compute() {
    const p = document.getElementById("principal").value;
    const principal = document.getElementById("principal").value;

    // alerts if input 0 or less than 0
    if (parseInt(principal) <= 0){
        alert('Enter a positive number');
        document.getElementById("principal").focus();

        return;
    } 
    
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate /100;

    //converts num of years to future year
    const year = new Date().getFullYear()+parseInt(years);
    const result = document.getElementById("result").value;
    
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br\> at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will recieve an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

// reads slider value and displays next to span
function updateRate() {
    const rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText=rateval+"%";
}  
