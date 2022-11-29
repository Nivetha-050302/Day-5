//question 1
//a)Print odd numbers in an array:
//anonymous function 
let arr1=[1,2,3,4,5,6,7]
let oddnum=function(arr){
    let odd_arr=[];
    for(let num of arr){
       (num%2!==0)? odd_arr.push(num) : num;                  
       }
    return odd_arr
   }
console.log(`odd numbers in an array : [${oddnum(arr1)}]`) 

//IIEF function

let arr11=[1,2,3,4,5,6,7,8]
console.log(`The array odd number :[${
(function(arr){
 let odd_arr=[];
 for(let num of arr){                                         
     (num%2!==0)? odd_arr.push(num) : num;                    
 }
 return odd_arr
})(arr11)}]`);     

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      

//b)convert all the string to the title caps in string array.
//Anonymous function :

let str_arr=["dog","cat","lion","horse","zebra"]
let title_cap=function(arr){
title_capped_arr=[];
  for (let index in arr){
      title_capped_arr.push(arr[index].charAt(0).toUpperCase()+arr[index].slice(1));     
}
console.log(`Title caps in a string array : [${title_capped_arr}]`);
}
title_cap(str_arr)                                            

//IIEF function:
let str_arr1=["dog","cat","lion","horse","zebra"]
console.log(`Title caps in a string array :[${
(function(str_arr){
 let title_capped_arr=[];
  for(let str of str_arr){
      title_capped_arr.push(str.charAt(0).toUpperCase()+str.slice(1));
}
return title_capped_arr
})(str_arr1)}]`); 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    

//c)sum of all number in an array:
//anonymous function:  

let num1=[15,30,12,5,27]
let sum=function(...arr){                                     
  for (let index in arr){
      console.log(`Sum of all number : ${(arr[index].reduce((prev, current) => prev + current,0))}`);
      }
}
sum(num1)  

//IIEF function:

let num21=[15,30,12,5,27]
console.log(`Sum of all number :${
(function(num2){
let result=0;
for (let index in num2){
  result+=num2[index];                                       
         }
 return result;
})(num21)}`)   

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// d)Return all prime number in an array:
//anonymous function:
let num12=[33,65,44,59,103]
let primenum=[];
let primenumber=function(arr){
   for(let aa of arr){
   if(aa>1){
         let flag=true;                                     
         for(let i=2;i<aa;i++){
               aa%i===0? flag=false:true;                    
         }flag?primenum.push(aa):true;
   }
}}
primenumber(num12)
console.log(`Prime numbers is: ${primenum}`);

//IIEF function:

let num123=[33,65,44,59,103]
console.log(`Prime numbers are: ${                            
(function(num1){
let primenum=[];
for (let v of num1){
     if(v>1){
           let flag=true;
           for(let i=2;i<v;i++){                           
                 v%i===0?flag=false:true;                  
           }flag?primenum.push(v):true;
     }
}
return primenum;
}(num123))                                                
}`)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                               
//e)Palandrome in an array:
//Annonymous functon:
let arr12=["not","kites","dmkd",15151,12345,98765];
let reverse=function(num){
  let a=String(num).split("")
  let rev=[];
  let l=a.length;
  for(let i=l-1;i>=0;i--){                                   
      rev.push(a[i]);
      }
  rev=rev.join("");                                           
  return rev;
  }
  result1_arr=[];
  for(let v of arr12){
      v=String(v);                                            
      v==reverse(v)? result1_arr.push(v):false;
  }
console.log(result1_arr);

//IIEF function:
 let arr13=["not","kites","dmkd",15151,12345,98765];
 console.log(
 (function(arr){
      result=[];
      for(let num of arr){                                     
      let a=String(num).split("")
      let rev=[];
      let l=a.length;
      for(let i=l-1;i>=0;i--){
          rev.push(a[i]);
      }
      rev=rev.join("");
      a=a.join("")
      rev===a? result.push(rev):false;
 }   return result;
 })(arr13));

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//f)Median of two sorted arrays of same size:
//annonymous Function:
  let arr121=[9,8,7,6]
 let arr222=[90, 82, 74, 66, 58, 40]
 let median=function(arr1,arr2){
      let arr_com=[...arr1,...arr2];                            
      arr_com.sort((a,b)=>a-b)                                 
      let len=arr_com.length;
      let arr_l=len/2;
      let result=arr_com[arr_l]+arr_com[arr_l-1];
      return result/2;
 }
 console.log(`Median for given two equal arrays are: ${median(arr121,arr222)}`);


//IIFE Function:
 let arr111=[9,8,7,6];
 let arr221=[90, 82, 74, 66, 58, 40];
 console.log(`Median for given two equal arrays are: ${
 (function(arr1,arr2){
      let arr_com=[...arr1,...arr2];
      arr_com.sort((a,b)=>a-b);
      let len=arr_com.length;                                   
      let arr_l=len/2;
      let result=arr_com[arr_l]+arr_com[arr_l-1];
      return result/2;
 })(arr111,arr221)
 }`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//g)Remove duplicates from a array:
//Annonymous function:
 var arr_s = ["beetroot", "beans", "pumpkin","beans", "carrot", "beetroot","pumpkin"];

 let remove_duplicates=function(arr){
      let a=[];
      console.log([...new Set(arr)])                              
 }
 remove_duplicates(arr_s);

//IIPE Function:
 var arr_s1 = ["beetroot", "beans", "pumpkin","beans", "carrot", "beetroot","pumpkin"];
 (function(arr){
      let a=[];
      console.log([...new Set(arr)])
 }(arr_s1));                                                     

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//h)Rotate an array bye K times:
//Annonymous function:
 let arr10=["dharshan","niranjan","ajay","ayesha","azeen"];
 let k1=5;
 let rotate_array=function(arr1,k){
      let arr=[...arr1];
      arr.push(arr.shift());
      for(let i=1;i<=k;i++){
      }
      return arr;
 };
 console.log(rotate_array(arr10,k1));                             

//IIFE Function:
 let arr100=["noorjahan","vishnu","vijay","ram","logamaliya"];
 let k=3;
 (function(arr1,k){
      let arr=[...arr1];                                         
      for(let i=1;i<=k;i++){
      arr.push(arr.shift());
      }
      console.log(arr);
 }(arr100,k));

 //-------------------------------------------------------------------------------
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //-------------------------------------------------------------------------------
 //a).Print odd number in an array: 

 let arr=[1,2,3,4,5,6,7,8,9,10,11,21,31];
const odd_num=(arr)=>{
let result=[];
for(let v of arr){
    v%2!==0?result.push(v):false;                         
};
return result;
}
console.log(`Odd number array is: [${oddnum(arr)}]`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// b)Convert all the strings to title caps in a string array
let arr_1=["ayesha","vishnu","logamaliya","nivi"];
const titlecap=(arr)=>{
    let res=[];
    for(let v of arr){
       res.push(v[0].toUpperCase()+v.slice(1,v.length))    
}
return res;
}
console.log(titlecap(arr_1));         

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// c) Sum of all numbers in an array:
let arr2=[1,2,3,4,5,6,7,8,9,10];
const sum_arr=(arr)=>{
     return arr.reduce((a,b)=>a+b,0);                      
}
console.log(`Sum of all number in an array is: ${sum_arr(arr2)}`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// d) Return all prime numbers in an array:
let arr3=[1,2,3,4,5,6,7,8,9,10];
let prime_number=(array)=>{                               
   let result=[];
   for(let v of array){
       let flag=true;
       if(v>1){
           for(let i=2;i<v;i++){
               if(v%2===0){
                   flag=false;
                   break;
               }
           }
       }(flag)? result.push(v):false;                    
     }return result;
}
let resultvbl=prime_number(arr3);
console.log(`Prime numbers in an array : [${resultvbl}]`); 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// e) Return all palindromes in an array:
let arr4=["not","kites","dmkd",15151,12345,98765];
let palindrome=(array)=>{                               
   let res1=[];
   for(let v of array){                                
       v=String(v);
       let l=v.length;
       let tem="";
       for(i=l-1;i>=0;i--){                              
           tem+=v[i]
           // console.log(tem);
       }v===tem? res1.push(v):false;
   }
  return res1;
};
let z=palindrome(arr4);                                   
console.log(`Palindrome array is ; [${z}]`);
