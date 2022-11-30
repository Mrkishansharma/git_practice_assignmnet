
let num=17;

let isPrime = "Yes";

if(num==1 || num==2){
    console.log(isPrime);
}else{
    for(let x=2; x<num; x++){
        if(num%x === 0){
            isPrime = "No";
            break;
        }
    }
    console.log(isPrime);
}
