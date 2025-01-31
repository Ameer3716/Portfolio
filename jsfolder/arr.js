// console.log("Hello World!")
// let fruits=new Array("apple","banana","orange")
// fruits.splice(2,4,"APPLE","Orange","Apricot","Guava")
// console.log(fruits);
// fruits.slice(1,2);
// console.log(fruits);
// let i=fruits.indexof("apple");
// console.log(i);
// let output=fruits.forEach((value)=>
// {value.toUpperCase()
// })
// fruits.filter(val=>val==="Apple");
// let values=[1,2,5,8,9];
// let results=values.reduce(((acc,val)=>acc+"<li>"+val+
// "</li>","<ul>");
// result+="</ul";
// console.log(results);
// let number=[1,2,34,8,0]
// let max=number.reduce(((acc,val)=>acc>val?acc:val),number[0]);
// console.log(max);
// let num=[[1,2,3],[4,5,6],[7,8,9]];
// let flat=num.reduce((acc,val)=>acc.concat(val),[]);
// console.log(flat);
// let valueset=new Set([1,2,3,4,5,6,7,8,9,10]);
// console.log(valueset);
   // let arr=new Array("ameer",1,2,"Sultan");
   // arr.unshift("M");
   // console.log(arr);
   // arr.pop();
   // console.log(arr);
   // arr.push(true);
   // arr.push(11);
   // arr.push(12);
   // arr.push(13);
   // console.log(arr);
   // arr.splice(3,0,"XHK");
   // console.log(arr);
   // let arr=[1,2,3,4];
   // arr.map((index,number)=>
   // {
   //     console.log(number);
   //     console.log(index);
   // })
   // let ansarr=arr.map((index,number)=>
   // {
   //     console.log(number);
   //     console.log(index);
   // })
   // console.log(ansarr);
// let arr=new Array(1,2,4,7,8,9);

// let evenarr=arr.filter((value)=>
// {
//    if(value%2==0)
//    {
//       return true;
//    }
//    else{
//       return false;
//    }
// })
// console.log(evenarr);


// let arr1=[1,4,7,9,22]
// let maxarr=arr1.reduce((acc,value)=>
// {
// if(value>acc)
// {
//    acc=value;
// }
// return acc;
// },0)
// console.log(maxarr);
let values=["Apple","Bnana","Pineple"];
let resultarr=values.reduce((acc,value)=>
      acc+"<li>"+value+"</li>","<ul>")
resultarr+="</ul>";
console.log(resultarr);
