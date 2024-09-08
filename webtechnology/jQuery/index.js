$("h1").css("backgroundColor","red");
$("h1").css("color","white")
console.log($("h1").css("color"));


$("h1").addClass("textcolor align");
$("h1").removeClass("textcolor");
console.log($("h1").hasClass("align"));

$("h1").text("hi")


$("a").attr("href","https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384230#overview");

$("h1").click(function () {
$("h1").css("color","red")   
});

$(document).keypress(function (event){
    $("h1").text(event.key);
})

$("button").on("click",function(){
    $("button").css("backgroundColor","red" );
    $("button").css("color","white");

});

$("button").on("mouseover",function(){
    $("button").css("backgroundColor","red" );
    $("button").css("color","white");

});






