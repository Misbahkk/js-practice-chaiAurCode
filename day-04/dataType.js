/* 
Kis bases pa data ko memory ma rakha jata ha us ka twi categorize ha
1. promative
 2. None primitive

 type of PRIMATIVE data type
7 type : strung, number, boolean, null, symbol, undefined, Symbol , BigInt

SYMBOL: kisi bi value ki unique vaba ja liya symbol use hota ha. specilly ap advance js ka frontend developmnet kren gn to vhn pa jo component ha vo ek hi kai bar use kr rhe hn but kbi kbi ya requiremnt ajati ha ka koi bi buttion ha section ha use hame unique bana ha to use ek symbol ma rap kr  deta hn to vo uniqiue ban jata ha that's it...

refrence(Non premitive):
ya sare vi han jin ka ap ko memory ma refrence directly allocated kiya jata ha

3 type: Array , Objects, fuction 

Javascript is dynamiclly typed language

*/

const id = Symbol('123')
const numberid = Symbol('123')
// This both value is different
console.log(id === numberid)

console.log(id) 
console.log(numberid);



/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/