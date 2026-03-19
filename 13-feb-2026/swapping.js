//without using temp
function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a);
    console.log(b);
}
swap(10,20);

/* using temp logic 
temp=a;
a=b;
b=temp;
*/