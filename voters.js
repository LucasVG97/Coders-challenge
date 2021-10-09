
// VOTERS=====================================================================

let voters = [
  { name: 'Bob', age: 18, voted: true },
  { name: 'Jake', age: 18, voted: true },
  { name: 'Kate', age: 18, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]

let votersAgeRange = voters.reduce((acc, voter) => {
  if (voter.age >= 18 && voter.age <= 25) {
    acc.YoungPeople += 1
    if (voter.voted) { acc.YoungVotes += 1 }
  }
  else if (voter.age >= 26 && voter.age <= 35) {
    acc.MidPeople += 1
    if (voter.voted) { acc.MidVotes += 1 }
  }
  else {
    acc.OldPeople += 1
    if (voter.voted) { acc.OldVotes += 1; }
  }
  return acc;
}, { YoungVotes: 0, YoungPeople: 0, MidVotes: 0, MidPeople: 0, OldVotes: 0, OldPeople: 0 });
console.log(votersAgeRange)