let age =70;
let price = 500;
let semiPrice =!true;
if (age < 10) {
    console.log('Free');
}
else{
    if (semiPrice === true) {
       let dicount = price / 2;
       let payAmount = price - dicount;
       console.log(payAmount); 
    }
    else{
        if (age >= 60) {
            let dicount = price * 15 / 100;
            let payAmount = price - dicount
            console.log(payAmount);
        }
        else{
            console.log(price);
        }
    }
}