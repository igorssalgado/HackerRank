function sockMerchant(n, ar) {
    for (let index1 = 0; index1 <= n; index1++) {
        for (let index2 = 1; index2 <= n; index2++){
            if (ar[index1] === ar[index2]){
                match++
                break
            }
        }
    }
    return match;
}
