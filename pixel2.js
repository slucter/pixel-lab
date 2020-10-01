const randData = (lg, dt) => {
    const ArrStr = 'Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf';
    const arr = ArrStr.split(',')
    let myArray = [];
    for(let i =0; i < lg; i++){
        let rand = Math.floor(Math.random() * arr.length);
        if(rand > arr.length - dt) rand = rand - dt;
        let data = arr.slice(rand, rand  + dt);
        let dtAr = data.toString()
        myArray[i] = dtAr;
    }
    return myArray;
}

console.log(randData(2,3))
