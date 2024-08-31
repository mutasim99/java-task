function bmi (weight , height) {
    let bmi = weight / (height ** 2);
    if (bmi < 18.5) {
        return ' you are underweight.'
    }
    else{
        if (bmi >= 18.5 && bmi <= 24.9) {
            return 'You are normal'
        }
        else{
            if (bmi >= 25 && bmi <= 29.9) {
                return 'You are overweight'
            }
            else{
                if (bmi >= 30) {
                    return 'you are prepeared closed to die i think'
                }
            }
        }
    }
}
console.log(bmi(64 , 1.64));