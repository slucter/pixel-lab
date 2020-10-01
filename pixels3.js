const ascendingEuy = (data) => {
    let lng = data.length;
    let strArr = '';
    let numbArr = '';
    for(let y = 0; y < lng; y++){
        if(typeof data[y] == 'string') strArr += data[y] + ",";
        if(typeof data[y] == 'number') numbArr += data[y] + ",";
    }

    // ASCENDING FOR ALPHANUMERIC

    if(strArr.length > 0 && numbArr.length > 0){
        let dt = strArr.split(',').filter( e => e);
        let dtt = numbArr.split(',').filter( e => e).map(numb => parseInt(numb, 10))
        let alphanum = [];
        for(let i = 0; i < dtt.length; i++){
            alphanum[alphanum.length] = dtt[i];
        }
        for(let i = 0; i < dt.length; i++){
            alphanum[alphanum.length] = dt[i];
        }
        for(let i = 0; i < alphanum.length; i++){
            for(let u = 0; u < alphanum.length; u++){
                if(alphanum[u] > alphanum[u + 1]){
                    let temp = alphanum[u];
                    alphanum[u] = alphanum[u + 1];
                    alphanum[u + 1] = temp;
                }
            }
        }

        return alphanum;

    } else {

        // ASCENDING ONLY FOR NUMERIC / STRING

        for(let i = 0; i < lng; i++){
            for(let u = 0; u < lng; u++){
                if(data[u] > data[u + 1]){
                    let temp = data[u];
                    data[u] = data[u + 1];
                    data[u + 1] = temp;
                }
            }
        }

        return data;
    }
}

const descendingEuy = (data) => {
    let lng = data.length;
    let strArr = '';
    let numbArr = '';
    for(let y = 0; y < lng; y++){
        if(typeof data[y] == 'string') strArr += data[y] + ",";
        if(typeof data[y] == 'number') numbArr += data[y] + ",";
    }

    // DESCENDING FOR ALPHANUMERIC

    if(strArr.length > 0 && numbArr.length > 0){
        let dt = strArr.split(',').filter( e => e);
        let dtt = numbArr.split(',').filter( e => e).map(numb => parseInt(numb, 10))
        let alphanum = [];
        for(let i = 0; i < dt.length; i++){
            alphanum[alphanum.length] = dt[i];
        }
        for(let i = 0; i < dtt.length; i++){
            alphanum[alphanum.length] = dtt[i];
        }
        for(let i = 0; i < alphanum.length; i++){
            for(let u = 0; u < alphanum.length; u++){
                if(alphanum[u] < alphanum[u + 1]){
                    let temp = alphanum[u];
                    alphanum[u] = alphanum[u + 1];
                    alphanum[u + 1] = temp;
                }
            }
        }

        return alphanum;

    }
    //  DESCENDING FOR STRING / NUMERIC
    for(let i = 0; i < lng; i++){
        for(let u = 0; u < lng; u++){
            if(data[u] < data[u + 1]){
                let temp = data[u];
                data[u] = data[u + 1];
                data[u + 1] = temp;
            }
        }
    }

    return data;
}


const numeric = [10,9,102,66,5421,1,0];
const string = ['Wulan','Raharjo','Widya','Yuda','Cinta','Iskandar','Hidayat','Kusuma','Indah','Jusuf']
const alphnumeric = ['Wulan','Raharjo','Widya',10,9,102,66,5421,1,0,'Yuda','Cinta','Iskandar','Hidayat','Kusuma','Indah','Jusuf']

console.log(ascendingEuy(alphnumeric)) // numeric / string / alphnumeric
console.log(descendingEuy(alphnumeric))
