let marks =101;
if (marks > 0 && marks < 33) {
    console.log('your result is F');
}
else{
    if (marks >= 33 && marks <= 39) {
        console.log('Your reslt is E');
    }
    else{
        if (marks >= 40 && marks <= 49) {
            console.log('Your result is D');
        }
        else{
            if (marks >=50 && marks <=59) {
                console.log('Your marks is C');
            }
            else{
                if (marks >= 60 && marks <= 69) {
                    console.log('Your result is B');
                }
                else{
                    if (marks >= 70 && marks <= 79) {
                        console.log('Your result is A');
                    }
                    else{
                        if (marks >= 80 && marks == 100) {
                            console.log('Your reslt is A+');
                        }
                        else{
                            if (marks > 100) {
                                console.log('Confirm BCS biye korte jaw');
                            }
                        }
                    }
                }
            }
        }
    }
   
}