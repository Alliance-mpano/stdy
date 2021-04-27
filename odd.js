var i;
var n=30;
var sum=0;
var count=0;
var average;
var p=0;
for(i=2;i<=n;i++){
    if(i%2==0){
     console.log(i+"is an even number")
    } else if(i%2==1){
        count=count+1;
        sum=sum+i; 
        console.log(i+" is an odd nbr")
    }
}
console.log("The number of  odd numbers is "+count);
    console.log("The sum of odd nbrs is "+sum);
    console.log("The average of odd numbers is "+sum/count);
    

