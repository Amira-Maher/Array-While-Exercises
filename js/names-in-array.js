// An Array contains of names not found in array 2 and names not found in array 1 

let schoolFriends = ["Ahmad", "mohammad", "Amira", "Dahy", "Rahma"];
let collegeFriends = ["Samira", "mohammad", "Amira", "Dahy", "Reem"];
let friends = [];
let i = 0;

while(i < schoolFriends.length) 
{
    let exist = collegeFriends.includes(schoolFriends[i]);

    if(exist === false)
    {
        friends.push(schoolFriends[i]);
    }

    i++;
}

i = 0;

while(i < collegeFriends.length)
{
    let exist = schoolFriends.includes(collegeFriends[i]);

    if(exist === false)
    {
        friends.push(collegeFriends[i]);
    }
    
    i++;
}
console.log(friends);

