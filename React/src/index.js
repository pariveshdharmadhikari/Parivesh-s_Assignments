Array.prototype.myMap =function()
{
    for(let values of this)
    {
        console.log(values*2);
    }
}
let a = [10,20,30,40];
a.myMap();