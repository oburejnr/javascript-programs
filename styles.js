console.log('hello world')
function addEvenNumbersBetween1and10(){
    let number = 0
    let sum = 0
    while(number < 11){
        //console.log(number);
        if(number % 2 == 0){
             sum += number
             //console.log(number);

        }
number ++;
    }
console.log(sum);

}

addEvenNumbersBetween1and10()
