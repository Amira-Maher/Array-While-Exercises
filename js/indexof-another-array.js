// knowing the index of the same value in another array

let schoolFriends = ["Amira", "Hager", "Rawda", "Rinad", "Dalia"];
let names = ["Amira", "Rawda", "Dalia", "Dahy"];
let namesIndexes = [];
let i = 0;


while(i < schoolFriends.length)
{
    let repeatedNames = schoolFriends[i];
    
    if(names.includes(repeatedNames))
    {
        namesIndexes.push(i);
    }

    i++;
}

console.log(namesIndexes);

// document.write("<div style = display:flex;align-items:center;justify-content:center;width:100%;height:100%;>" + "<h1 style = width:100%;height:100%;color:blueviolet;background-color:lightblue;text-align:center;border-radius:25px;display:flex;align-items:center;justify-content:center;font-size:60px;>" + "[" + nameIndexes + "]" + "</h1>" + "</div>");
