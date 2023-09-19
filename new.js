$("div").css("background-color","red");


// setInterval(() => {
//     $("div").hide(5000);
//     $("div").show(5000);
// }, 3000);

// $("div").slideUp(3000);
// $("div").slideDown(5000);

// $("div").fadeOut(3000);
// $("div").fadeIn(3000);
 $("button").on("click",()=>{
  clearInterval(timeId);
 }
 )
 let timeId = setInterval(()=>{
    $("div").fadeOut(3000);
    $("div").fadeIn(3000);
},4000)