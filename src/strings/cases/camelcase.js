const STR = "good to see you "

let FinalString = STR[0].toUpperCase();

for (let j = 1; j < STR.length; j++) {

    FinalString += STR[j];

    if (STR[j] === ' ') {
        if (j + 1 < STR.length) {
            FinalString += STR[j + 1].toUpperCase();
            j = j + 1;
        }
    }
}




console.log(FinalString)
