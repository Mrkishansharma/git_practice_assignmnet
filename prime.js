
let num=7;

let isPrime = "Yes";

if(num==1 && num==2){
    console.log(isPrime);
}else{
    for(let i=2; i<num; i++){
        if(num%i == 0){
            isPrime = "No";
            break;
        }
    }
    console.log(isPrime);
}
