let random=Math.random();
 random=Math.floor(random*6);
 let round= random+1;

 let setimage="images/"+"dice"+round+".png";
  let a=document.querySelectorAll("img")[0];
a.setAttribute("src" ,setimage);

let random2=Math.floor(Math.random()*6)+1;
let set="images/"+"dice"+random2+".png";
let b=document.querySelectorAll("img")[1];
b.setAttribute("src",set);

if(round>random2){
    document.querySelector("h1").innerHTML="Player 1 Won"
}
else if(round<random2){
    document.querySelector("h1").innerHTML="Player 2 Won"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}

