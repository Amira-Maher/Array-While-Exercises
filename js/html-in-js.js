let schoolFriends = ["Reham", "Amira", "Aml", "Haya"];
let collegeFriends = ["Yara", "Esraa", "Basma", "Weaam"];
let i = 0;

while(i < schoolFriends.length)
{
    document.write("<ul style= display:flex;flex-direction:column;gap:50px;align-items:center;justify-content:center;height:100%;>" + "<li style=color:purple;font-weight:bold;font-size:35px;list-style:none;text-transform:uppercase;text-align:center;>" + schoolFriends[i] + "</li>" + "</ul")
    i++;
}

i = 0;

while(i < collegeFriends.length)
{
    document.write("<ul style= display:flex;flex-direction:column;gap:50px;align-items:center;justify-content:center;>" + "<li style=color:red;font-weight:bold;font-size:35px;list-style:none;text-transform:uppercase;text-align:center;>" + collegeFriends[i] + "</li>" + "</ul")
    i++;
}


/**
 
    while(i < schoolFriends.length)
    {
        console.log(schoolFriends[i]);
        i++;
    }

    i = 0;

    while(i < collegeFriends.length)
    {
        console.log(collegeFriends[i]);
        i++;
    }
  
 */