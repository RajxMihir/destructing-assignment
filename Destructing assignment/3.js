function swapVars (x,y)
{
    [x,y] = [y,x];
    return [x,y];
}

let x = 5;
let y = 10;

[x,y] = swapVars(x,y);
console.log(x,y);
