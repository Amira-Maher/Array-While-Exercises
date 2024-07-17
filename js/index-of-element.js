// The index of an element in an Array
const NOT_EXIST = -1;
let schoolFriends = ["Amira", "Hager", "Rawda", "Rinad", "Dalia"];
let name = "Dalia";
let i = 0;
let index = NOT_EXIST;

while(i < schoolFriends.length)
{
    if(name === schoolFriends[i])
    {
        index = i;
        break;
    }
    i++;
}

if(index === NOT_EXIST)
{
    console.log("The Name Is Not Exist");
}
else
{
    console.log("The Index Of The Element Is " + index);
}



