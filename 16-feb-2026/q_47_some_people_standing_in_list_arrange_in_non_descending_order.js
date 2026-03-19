/* 
Some people are standing in the field. there are some plants and trees between them which cannot move, arrange them in non-descending order.
*/
//-1 represents plants and trees
function arrangePeople(){
    let people=[5,-1,3,-1,2];
    onlyPeople=[];
    let temp=0;
    //approach - get people in seperate array and sort and then put into first array in non -1value index
    for(let i=0;i<people.length;i++){
        if(people[i]!==-1){
            onlyPeople.push(people[i]);
        }
    }

    onlyPeople.sort((a,b)=>a-b);
   /* for(let i=0;i<onlyPeople.length-1;i++){
        for(let j=0;j<onlyPeople.length-i-1;j++){
 
        if(onlyPeople[j]>onlyPeople[j+1]){
            temp=onlyPeople[j];
            onlyPeople[j]=onlyPeople[j+1];
            onlyPeople[j+1]=temp;
        }
        } 
         } */
    let index=0;
    for(let i=0;i<people.length;i++){
        if(people[i]!==-1){
            people[i]=onlyPeople[index];
            index++;
        }
    } 
    console.log(people);
}
arrangePeople();