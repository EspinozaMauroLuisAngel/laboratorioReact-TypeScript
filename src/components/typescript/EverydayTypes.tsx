import React , { useState } from "react";

let username:string ='Jorge';
const age: number = 38;
const average: number =7;
const myarr: string []=[];
let big1 = BigInt(9007199254099);

myarr.push(username);
myarr.push(age.toString());
myarr.push(average.toString());

const EverydayTypes =() =>{
return(
    
<ul>
<li>{username}</li>
<li>{age}</li>
<li>{average}</li>
<li>{myarr}</li>

</ul>

)
}


export default EverydayTypes