
 var len=document.querySelectorAll(".drum").length;
 console.log(len);
 
for(let i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        alert("clicked");
    })

}



