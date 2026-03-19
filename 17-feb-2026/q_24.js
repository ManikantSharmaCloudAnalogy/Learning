/*
Create a method which return an array containing every possible number of people and cat
       Ex:- Input = 6 , Output :- [1,3] Input = 2 , Output :- [1]
*/

/*Input = 6

1 person (2 legs) + 1 cat (4 legs) = 6 → people = 1

3 people (6 legs) + 0 cats = 6 → people = 3

Output → [1,3]

Input = 2

1 person (2 legs) + 0 cats = 2

Output → [1]

So we try every possible number of people and check if the remaining legs can form cats (multiples of 4). */
function possiblePeople(n) {
    const result = [];

    for (let people = 0; people * 2 <= n; people++) {
        const remainingLegs = n - (people * 2);

        if (remainingLegs % 4 === 0) {
            if (people > 0) {
                result.push(people);
            }
        }
    }

    return result;
}

// Examples
console.log(possiblePeople(6)); // [1, 3]
console.log(possiblePeople(2)); // [1]