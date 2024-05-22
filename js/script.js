$(document).ready(function(){

    console.log("경로 뭐가 문제지")


    var $dstit = document.querySelector(".dstit");
    var $dwtit = document.querySelector(".dwtit");
    var $webtit = document.querySelector(".webtit");
  
    var $btn_left = document.querySelector(".left");
    var $btn_right = document.querySelector(".right");
    var $dsimg = document.querySelector(".menu_img");
    var $dwimg = document.querySelector(".draw_img");
    var $webimg = document.querySelector(".web_img");
  
    var one = 1;
  
    
  
      $dstit.addEventListener("click", function(){
        $(".pfds").css("display", "flex");
        $(".pfdw").css("display", "none");
        $(".pfweb").css("display", "none");
        $dsimg.setAttribute("src", `./img/menu${one}.jpg`);
      });
      
      $dwtit.addEventListener("click", function(){
        $(".pfds").css("display", "none");
        $(".pfdw").css("display", "flex");
        $(".pfweb").css("display", "none");
        $dwimg.setAttribute("src", `./img/drawing${one}.jpg`);
      });
      
      $webtit.addEventListener("click", function(){
        $(".pfds").css("display", "none");
        $(".pfdw").css("display", "none");
        $(".pfweb").css("display", "flex");
        $webimg.setAttribute("src", `./img/web${one}.jpg`);
        $(`.web${one}`).css("display", "block");
  
        
      });
    
  
  
  // 버튼 슬라이드
  
  
  
  // if($(".pfds").css("display", "flex")){
  //   $(".pfdw").css("display", "none");
  //   $(".pfweb").css("display", "none");
  // };
  
  // if($(".pfdw").css("display", "flex")){
  //   $(".pfds").css("display", "none");
  //   $(".pfweb").css("display", "none");
  // };
  
  var init = 2
  var out = 3
  
  $btn_right.addEventListener("click", function(){
  
      $dsimg.setAttribute("src", `./img/menu${init}.jpg`);
      $dwimg.setAttribute("src", `./img/drawing${init}.jpg`);
      $webimg.setAttribute("src", `./img/web${init}.jpg`);
      init++
      if(init == 4){  
          init = 1
      }
    
  
  });
  
  
  
  $btn_left.addEventListener("click", function(){
    $dsimg.setAttribute("src", `./img/menu${out}.jpg`);
    $dwimg.setAttribute("src", `./img/drawing${out}.jpg`);
    $webimg.setAttribute("src", `./img/web${out}.jpg`);
    --out;
    if(out == 0){
        out = 3
      }
  
  });





    
});
  











