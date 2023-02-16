function addEvenNumbersBetween0and10(){
     let sum = 0
    for (let j = 0; j < 11; j++) {
        if (j % 2 == 0) {
            sum += j
        }
    }
console.log(sum);n
}
addEvenNumbersBetween0and10()