//Random//
console.log("\n Problem 1")
let getDiceRoll = () => Math.floor(Math.random()*6)+1;
let diceRollFunctions = () =>
{
    let limit = 10, count = 0;
    let diceMap = new Map();
    while(count < limit)
    {
        let diceRoll = getDiceRoll();
        let c = 1;
        if(diceMap.has(diceRoll))
            c = diceMap.get(diceRoll)+1
        diceMap.set(diceRoll, c);
        if(c > count)
            count = c;
    }
    console.log(diceMap);
    let max = 0, min = 11, maxKey, minkey;
    for(let [key, value] of diceMap)
    {
        if(value > max)
        {
            max = value;
            maxKey = key;
        }
        if(value < min)
        {
            min=value;
            minkey=key;
        }
    }
    console.log('Max Key = ' + maxKey + ',\n' + 'Min Key = ' + minkey);
}
diceRollFunctions();
console.log("\nProblem 2")
let getBirthmonthNumber = () => Math.floor(Math.random()*12)+1;
let getBdayMonth = () =>
{
    let bDayMap = new Map();
    for(let i=0; i<50; i++)
    {
        let month = getBirthmonthNumber();
        let personsHavingSameBdayMonth = '';
        if(bDayMap.has(month))
            personsHavingSameBdayMonth = bDayMap.get(month);
        personsHavingSameBdayMonth = personsHavingSameBdayMonth + (`${i},`);
        bDayMap.set(month, personsHavingSameBdayMonth);
    }
    console.log(bDayMap);
}
getBdayMonth();