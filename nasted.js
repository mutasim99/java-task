let myResult = 70;
let herResult = 85;
if (herResult >= 80 && myResult >= 80) {
    console.log('Let go for lunch');
}
else{
    if (herResult < 80 && herResult >= 60) {
        console.log('Good luck next time');
    }
    else{
        if (herResult < 60 && herResult >= 40) {
            console.log("keep your frind's mesage unseen");
        }
        else{
            if (herResult < 40) {
                console.log("Block your frind's");
            }
            else{
                if (myResult < 80 && herResult >= 80) {
                    console.log('tui muri kha mamma');
                }
            }
        }
    }
}