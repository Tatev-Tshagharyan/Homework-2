let x,y,z;                          //homework 1
    if(x===0 || y===0 || z===0){
        console.log("unsigned")
    }else if(x>0 && y>0 && z>0){
        console.log("+");
    }else if(x<0 && y<0 && z<0){
        console.log("+");
    }else if(x<0 && y<0 && z>0){
        console.log("+");
    }else if(x>0 && y<0 && z<0){
        console.log("+");
    }else if(x<0 && y>0 && z<0){
        console.log("+");
    }else{
        console.log("-");
    }
    
    
  let digit=5;                    //homework 2
  let num=3658;
  let lastDigit;
      while(num>0){
        lastDigit=num%10;
      if(lastDigit===digit){
          console.log("YES");
          break;
    }
      num=Math.floor(num/10); 
    }
      if(lastDigit!=digit){
          console.log("NO");
      }   
    
     

let asd=56398;              //homework 3
asd=asd+"";
if (asd.length===1){
    console.log(asd);
}else if(asd.length===2){
    console.log(asd[asd.length-1]+asd[0]);
}else if(asd.length){
    console.log(asd[asd.length-1]+asd.slice(1,asd[asd.length-2])+asd[0]);
}




let j=5;                //homework 4
let o=9;
let q=-5;
if(j<o && o<q){
       console.log(j,o,q);
}else if(j>o && j<q){
       console.log(o,j,q);
}else if(o<q && j>q){
       console.log(o,q,j);
}else if(j<q && q<o){
       console.log(j,q,o)
}else if(q<j && j<o ){
       console.log(q,j,o)
}else{
       console.log(q,o,j);
}







let a=5;                     //homework 5
let b=-13;
let c=6;
let result=b*b-4*a*c;
if (a==0){
    console.log("Enter valid constans");
}else if(result>0){
   let res1=(-b+Math.sqrt(result))/(2*a);
   let res2=(-b-Math.sqrt(result))/(2*a);
    console.log(`Solution are ${res2} and ${res1}`);
} else if(result<0){
    console.log("Solution does not exists");
}else if(result==0){
    let res3=(-b)/(2*a);
    console.log(`Solution is ${res3}`);
}



let n=+prompt();            //homework 6
let i=0;
let j=0;
if((n%2===0) && (!Math.floor(n/10))){
    i+=1;
}
if((n % 3===0) && (n%10===1)){
    j+=1;
}


                                                                         //homework 7
let figureName=prompt("Please choose figure name.triangle or rectangular?");
if (figureName==="triangle"){
    let answ1=+prompt("Wright height of the triangle");
    let answ2=+prompt("Write base of the triangle");
  if(answ1===0 || answ2===0){
      alert("Please enter only positives");
  }else if (answ1>0 && answ2>0){
      alert(`Square of the triangle is ${(answ1*answ2)/2}`);
 }
}else if(figureName==="rectangular"){
     let answ3=+prompt("Wright length of the rectangular");
     let answ4=+prompt("Write width of the rectangular");
     if(answ3===0 || answ4===0){
         alert("Please enter only positives");
     }else if(answ3>0 && answ4>0){
         alert(`Square of the rectangular ${(answ3*answ4)}`);
     }else{
         alert("Please enter only positives");
     }
 }




 let number=15265;        //homework 8
number+="152";
number=number.split("");
let max=number[0];
let min=number[0];
  for(let i=0; i<number.length; i++){
     if (number[i] > max) {
         max = number[i];
     }else if(number[i] < min) {
        min = number[i];
  }
}console.log(max-min);
