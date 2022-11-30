let N=6;
let str="ababa";
let bag=0;
for(let x=str.length-1; x>=0; x--){
    bag+=str[x];
}
if(bag===str){
    console.log("Yes It is Plindrome");
}else{
    console.log("No, It is not plaindrome");
}