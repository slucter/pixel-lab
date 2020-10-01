const makeRand = (length) => {
    let result           = '';
    let characters       = '1ab2cd3ef4gh5ij6kl7mn8op9qr0stuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
const palindromGenap = (lngth) => {
    let myChar = '';
    let myCharRev = '';
    let randChar = makeRand(lngth);
    let charLength = randChar.length / 2;
    for(let i = 0; i < charLength; i ++) myChar += randChar[i];
    for(let u = charLength - 1; u >= 0; u--) myCharRev += randChar[u];
    return myChar + myCharRev;
}
const palindromGanjil = (lngth) => {
    let myChar = '';
    let myCharRev = '';
    let randChar = makeRand(lngth);
    let charLength = Math.ceil(randChar.length / 2);
    for(let i = 0; i < charLength; i++) myChar += randChar[i]
    for(let u = charLength - 2; u >= 0; u--) myCharRev += randChar[u]
    return myChar + myCharRev;
}
const palindrom = (lng) => {
    if(lng % 2 == 0) return palindromGenap(lng);
    if(lng % 2 != 0) return palindromGanjil(lng);
}

console.log(palindrom(5))