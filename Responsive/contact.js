$(".panel").toggle()
$("form").toggle()
$("#contact a").toggle()






$("#menu").click( function(){
    $(".panel").toggle()
})


$("hgroup h2").click( function(){
    $("form").toggle()
        $("hgroup").toggle()
    $("#contact a").toggle()
    $("#contact").animate({marginTop:"30px" }, "slow")


})

$("#contact a").click( function(){
    $("form").toggle()
        $("#contact a").toggle()
            $("hgroup").toggle()
    $("#contact").animate({marginTop:"0px" }, "slow")


})

$("hgroup h3").click( function(){
    $("hgroup h3 a").text("tel. 535 153 407")
})
   

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


   

         $(".submit-button").click( function(){
  var x = document.forms["contact"]["Name"].value;
        var y = document.forms["contact"]["Email"].value;
        var z = document.forms["contact"]["Message"].value;
    
    if (x!=""&&validateEmail(y)&&z!="") {
        

    alert("Wiadomość została wysłana")
}
         })




    
    
    

   

 













        
   
     
                          
        
        