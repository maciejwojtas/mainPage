var $top =  $("article").offset().top;
        var $down = $("header").offset().top;
        var s = $(document).scrollTop();

 
$(".arrow").on("click", function () {
    if(s<$top/2){

        $("html").animate( {scrollTop: $top},1000);
    
    }
     if(s>$top/2){

        $("html").animate( {scrollTop: 0},1000);
    
    }
                    })
 
        
                
        
        $(".arrow").on("click", function(){
            $(".arrow").toggleClass("reverse")
})
        
        function arrow(){
    
        
            if(s>$top/2){
             $(".arrow").addClass("reverse")
        }  
            else{ 
                $(".arrow").removeClass("reverse")
            }
             $top =  $("article").offset().top;
         $down = $("header").offset().top;
         s = $(document).scrollTop();
            
            
            
        }
        setInterval(arrow,50);


  $(".panel").toggle()


$("#menu").click( function(){
    $(".panel").toggle()
})

  var width = parseFloat($(".slide").css("width"));
      var widthPerm = parseFloat($(".slide").css("width"));

      var length =parseFloat( $(".slides").css("width"));
        var margin = parseFloat($(".slides").css("margin-left"));
      var margin2 = parseFloat($(".slides").css("margin-left"));
     var imgHeight = $(".slide img").height();
    $(".slider").animate({"height" : imgHeight}, 1)
    $(".slides").animate({"height" : imgHeight}, 1)
    $(".slide").animate({"height" : imgHeight}, 1)
    $("button").animate({"top" : imgHeight/2}, 1)



var imgWidth = $(".slide").width();
$(".slider").animate({"width" : imgWidth}, 1)
    $(".slides").animate({"width" : 4*imgWidth}, 1)
    $(".slide").animate({"width" : imgWidth}, 1)  

function size(){
     width = parseFloat($(".slide").css("width"));
       widthPerm = parseFloat($(".slide").css("width"));

       length =parseFloat( $(".slides").css("width"));
         margin = parseFloat($(".slides").css("margin-left"));
       margin2 = parseFloat($(".slides").css("margin-left"));
      imgHeight = $(".slide img").height();
    $(".slider").animate({"height" : imgHeight}, 1)
    $(".slides").animate({"height" : imgHeight}, 1)
    $(".slide").animate({"height" : imgHeight}, 1)
    $("button").animate({"top" : imgHeight/2}, 1)



 imgWidth = $(".slide").width();
$(".slider").animate({"width" : imgWidth}, 1)
    $(".slides").animate({"width" : 4*imgWidth}, 1)
    $(".slide").animate({"width" : imgWidth}, 1)  
}

size()

function slide(){
    
 
    
    
if(width<0&&margin>=-widthPerm){
        width=-width

}
    if(margin<-widthPerm&&width>0){
        width=-width


}
    
    
            $(".slides").animate({'margin-left': '-='+width}, 1000)

    
        margin = parseFloat($(".slides").css("margin-left"));
       
     }



                 




                 




    

var articleHeight = $("#article").height();
    $("article").animate({"height" : articleHeight}, 1)
    




var run = setInterval(slide, 6000);


$(".slider").mouseenter( function(){
    clearInterval(run);
})

 


$(".right").click( function(){
            margin = parseFloat($(".slides").css("margin-left"));

    if(-margin<=length+widthPerm){
        
   width = parseFloat($(".slide").css("width"));

            $(".slides").animate({'margin-left': '-=' +width}, 1000)

        console.log("right")
        

    }
})
$(".left").click( function(){
            margin = parseFloat($(".slides").css("margin-left"));

    if(margin<0){
        
   width = parseFloat($(".slide").css("width"));

            $(".slides").animate({'margin-left': '+=' +width}, 1000)

        console.log("left")
        

    }
})
$(".aushwitz").toggle()
$(".psd").toggle()
$(".tenis").toggle()
$(".photos").toggle()





$("#aushwitz img").mouseenter(function(){
$("#description").text("Prosta strona o tematyce obozowej, właściwie wizytówka przewodnicka. Jeden z pierwszych moich projektów")
    $("#description").append("<a href="+"/jscript/aushwitz.html"+">Przejdź</a>")
    
})
$("#psd img").mouseenter(function(){
$("#description").text("Photoshop Document. Klasyczne Cięcie PSD do html wraz z interaktywnymi elementami javascript")
    $("#description").append("<a href="+"psd/psd.html"+">Przejdź</a>")
    
})
$("#tenis img").mouseenter(function(){
$("#description").text("Prosta gra w tenisa 2D napisana w javascript przy pomocy silnika Canvas. Warto zagrać")
    $("#description").append("<a href="+"/jscript/tenis.html"+">Przejdź</a>")
    
})
$("#photos img").mouseenter(function(){
$("#description").text("Animowana galeria zdjęć")
    $("#description").append("<a href="+"photos.html"+">Przejdź</a>")
    
})



   




//Prosta strona o tematyce obozowej, właściwie wizytówka przewodnicka. Jeden z pierwszych moich projektów
//Photoshop Document. Klasyczne Cięcie PSD do html wraz z interaktywnymi elementami javascript
//Prosta gra w tenisa 2D napisana w javascript przy pomocy silnika Canvas. Warto zagrać
//Animowana galeria zdjęć


    
    
    




   

 













        
   
     
                          
        
        