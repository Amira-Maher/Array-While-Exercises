// Addition of two Arrays in new Array

let schoolFriends = ["Reham", "Amira", "Aml", "Haya"];
let collegeFriends = ["Yara", "Esraa", "Basma", "Weam"];
let friends = [];
let i = 0;

while(i < schoolFriends.length)
{
    friends.push(schoolFriends[i]);
    i++;
}

i = 0;

while(i < collegeFriends.length)
{
    friends.push(collegeFriends[i]);
    i++;
}

console.log(friends);

