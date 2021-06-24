//Author: Godfred Osei
//Company: Engineroom-tech


//intialization of input variables
let loanAmount = document.getElementById('loan_amount');
let interestPercent = document.getElementById('interest_percent');
let monthsToPay = document.getElementById('months_to_pay');

//intialization of calculator button
let calculateBtn = document.getElementById('calculate');

//calculation function
calculateBtn.addEventListener('click', function(){
    

    //validate if input value is null
    if (loanAmount.value === "") {
        document.getElementById('error').innerHTML = "Enter a value!";
    } else {
        document.getElementById('error').innerHTML = "";
    }
    if (interestPercent.value === "") {
        document.getElementById('error2').innerHTML = "Enter a value!";
    } else {
        document.getElementById('error2').innerHTML = "";
    }
    if (monthsToPay.value === "") {
        document.getElementById('error3').innerHTML = "Enter a value!";
    } else {
        document.getElementById('error3').innerHTML = "";
    }
    
    if (loanAmount.value != "" && interestPercent.value != "" && monthsToPay.value != "") {

        //formulars
    let interestRate = document.getElementById('interest_rate').innerHTML = Math.round((interestPercent.value / 100) * loanAmount.value);
    let totalLoanAmount =  document.getElementById('total_loan_amount').innerHTML = Math.round(parseInt( loanAmount.value) + interestRate) ;
    let amountPerMonth = document.getElementById('amount_per_month').innerHTML = Math.round(parseInt(totalLoanAmount) / monthsToPay.value);
    }
    
    
});

//intialization of clear button
let clearBtn = document.getElementById('clear');

//clear values function
clearBtn.addEventListener('click', function(){

    //set input values to null
    loanAmount.value = "";
    interestPercent.value = "";
    monthsToPay.value = "";
});