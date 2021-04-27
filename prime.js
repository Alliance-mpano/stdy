var n=30;
var i;
var f=1;
var sum=0;
var count=0;
var j=2;
for(i=2;i<n;i++){
    for(j=2;j<=i/2;j++){
         if(i%j==0){
            f =f+1;            
        }                                                                                                                                                                                                                                                                                                                                                                                                           
        
    if(f==2){
        sum=sum+i;
        count=count+1;
    }
}
}
console.log("The sum of prime nbrs in the range is "+sum)
            console.log("The nbr of prime nbrs is "+count)
            console.log("The average of prime numbers is "+sum/count)       
