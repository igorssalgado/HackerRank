function timeConversion(s) {
    let temp = s.split(':')
    let hour = temp[0]
    let second = temp[2].slice(0, 2)
    if (s.includes('AM') || s.includes('am')) {
        if (hour === '12') {
            hour = '00'
        }
        temp[0] = hour
        temp[2] = second
        return temp.join().replace(',', ':').replace(',', ':')
    } else if (s.includes('PM') || s.includes('pm')) {
        if (hour === '12') {
            hour = '12'
        }else{
            hour = Number(hour) + 12
        }
        temp[0] = hour
        temp[2] = second
        return temp.join().replace(',', ':').replace(',', ':')
    } else {
        return temp.join().replace(',', ':').replace(',', ':')
    }
}

let test = '12:45:54PM';
let ret = timeConversion(test);
console.log(test + ' >1: ' + ret)

// let test1 = '02:32:02pm';
// let test2 = '03:32:02am';
// let test3 = '12:32:02pm';
// let test4 = '12:32:02am';
// let test5 = '22:32:02pm';
// let test6 = '2:32:02 pm';
// let ret1 = timeConversion(test1);
// console.log(test1 + '>1: ' + ret1)

// let ret2 = timeConversion(test2);
// console.log(test2 + '>2: ' + ret2)

// let ret3 = timeConversion(test3);
// console.log(test3 + '>3: ' + ret3)

// let ret4 = timeConversion(test4);
// console.log(test4 + '>4: ' + ret4)

// let ret5 = timeConversion(test5);
// console.log(test5 + '>5: ' + ret5)

// let ret6 = timeConversion(test6);
// console.log(test6 + '>6: ' + ret6)

// let ret = timeConversion(test1);

    //     if (temp[0] > 0 && temp[0] <= 12) {
    //         console.log('caiu')
    //     } else {
    //         temp[0] = Number(temp[0]) - 12;
    //     }
    //     if (temp[0] >= 10) {
    //         return temp.join().replace(',', ':').replace(',', ':')
    //     } else {
    //         return temp.join().replace(',', ':').replace(',', ':')
    //     }
    // }