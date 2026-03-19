/*
"A multi-story building has several floors. Each floor has an elevator. You are given two integers X and Y. The elevators in the building have a system with the following rules.

-> From any floor number A, you can only move to the floors numbered A/P, where P is the Prime factor of A that is smaller than a given number M.
->The elevator takes exactly 1 second to move to another floor.
->Only one elevator can move at a time.

1.  Suppose add floor no : 20 so move floor number A/P M =10 prime factor which less than M 
Write a program to find the minimum time required to move from Xth to the Yth floor of the building

Input format
Three space-separated integers X, Y, and M x and y is a floor number

Output format:-
Print two space-separated integers in a single line.
I.e, the time taken to meet and the floor number at which you meet in case, it is not possible to meet print “-1” (without quotes)  T F where T is the time taken and F is Floor number

Sample input   Sample output
20 16 10              3 4
100 120 10          3 20
160 100 10          4 20"
*/

function solve(X, Y, M) {

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function getAllFloors(start) {
    let visited = {};

    function dfs(num, time) {

      if (visited[num] !== undefined && visited[num] <= time) {
        return;
      }

      visited[num] = time;

      for (let i = 2; i <= num; i++) {
        if (num % i === 0 && isPrime(i) && i < M) {
          dfs(num / i, time + 1);
        }
      }
    }

    dfs(start, 0);
    return visited;
  }

  let fromX = getAllFloors(X);
  let fromY = getAllFloors(Y);

  let minTime = Infinity;
  let meetFloor = -1;

  for (let floor in fromX) {
    if (fromY[floor] !== undefined) {
      let time = fromX[floor] + fromY[floor];
      if (time < minTime) {
        minTime = time;
        meetFloor = floor;
      }
    }
  }

  if (meetFloor === -1) {
    console.log(-1);
  } else {
    console.log(minTime + " " + meetFloor);
  }
}
 solve(20, 16, 10 );