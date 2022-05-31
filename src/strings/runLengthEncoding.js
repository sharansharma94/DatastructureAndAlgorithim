function encodeRun(str) {
    let count = 1;
    let final = "";
    let current = str[0]

    for (let x = 1; x < str.length; x++) {
        if (str[x] === current) {
            count++;
        } else {
            final += `${current}${count}`;
            current = str[x];
            count = 1;
        }
    }
    final += `${current}${count ? count : ''}`
    console.log(final)
}


encodeRun('aabbc')
encodeRun('abcd')
encodeRun('abbdcaas')
