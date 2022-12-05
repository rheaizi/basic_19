const usdCurr =28;
const discount = 0.9;
function convert(amount,curr){
    return amount*curr;

}

function promotion(result){
    console.log(result*discount);

}
promotion(convert(500,usdCurr));

function test(){
    for (let index = 0; index < 5; index++) {
        console.log(index);
        if(index===3) return;
    }
    console.log('Done');
}
test();

function doNothing(){};
console.log(doNothing()==undefined);

