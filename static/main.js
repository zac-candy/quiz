// $("document").ready(function() {
//     onClicked = function() {
//         alert("Clicked")
//     }
//     $("h1").click(onClicked())
// }); 



// The above version of the code has been deprecated since jquery 3.0 . The newer version of the syntax is given below

$(function() {
    
    $("#submit").on("click",function(){
        
        answer = ($("#i1").val().trim().toLowerCase())
        if(answer == "netscape") {
            alert("Right Answer")
        } else {
            alert("Wrong Answer")
        }
        
    })
})
