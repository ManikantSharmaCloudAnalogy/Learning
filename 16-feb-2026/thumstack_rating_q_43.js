/*
in thumbtack,user are able to rate based on their experience working with them. 
each ratig in the form of integer1 to 5. 
all rating are average to produced a single number rating . if rating are below than average 
rating , display a message.
*/
function checkRating(ratings){
    let sum=0;
    for(let i=0;i<ratings.length;i++){
        sum=sum+ratings[i];
    }
    let avg=sum/ratings.length;
    console.log(`avg rating ${avg}`);
    for(let  i=0;i<ratings.length;i++){
if(ratings[i]<avg){
    console.log(`rating below average ${ratings[i]}`);
}
    }
}
checkRating([5,4,3,2,1]);

