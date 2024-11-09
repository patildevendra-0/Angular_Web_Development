

function Check_String(sentance:string,searchstring:string):boolean
{
    return sentance.includes(searchstring);
}

console.log(Check_String("Pune Kothrud Marvellous Infosystem","Marvellous"))