let N=6;
let str="ababa";
let bag="";
for(let x=str.length-1; x>=0; x--){
    bag+=str[x];
}
if(bag==str){
    console.log("Yes, It is Palindrome");
}else{
    console.log("No, It is not Palindrome");
}