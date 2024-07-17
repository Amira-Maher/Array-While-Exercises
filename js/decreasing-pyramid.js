// Decreasing Pyramid

const LINES_COUNT = 10;
let line = "";
let i = LINES_COUNT;

while(i > 0)
{
    let j = 0;

    while(j < i)
    {
        line += " *";
        j++;
    }
    
    console.log(line);
    line = "";
    i--;
}
