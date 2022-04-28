

// The above version of the code has been deprecated since jquery 3.0 . The newer version of the syntax is given below

$(function() { 

    //the objective of the below fn is to change question each time the next button is clicked.
    changeData = function(data) {
        $("#question").html(data["que"])
        $("#op1").html(data["ans"][0])
    $("#op2").html(data["ans"][1])
    $("#op3").html(data["ans"][2])
    $("#op4").html(data["ans"][3])
    }
    
    $.get("/question", changeData)

    $("#op1").on("click",function() {
        $.get("/answer/1", function(data) {
            if(data["answer"]) {
                $("#op1").html("is this workgin")
            } else {
                alert("Wrong Answer")
            }
        })
    })

    $("#op2").on("click",function() {
        $.get("/answer/2", function(data) {
            if(data["answer"]) {
                alert("Correct Answer")
            } else {
                alert("Wrong Answer")
            }
        })
    })

    $("#op3").on("click",function() {
        $.get("/answer/3", function(data) {
            if(data["answer"]) {
                alert("Correct Answer")
            } else {
                alert("Wrong Answer")
            }
        })
    })

    $("#op4").on("click",function() {
        $.get("/answer/4", function(data) {
            if(data["answer"]) {
                alert("Correct Answer")
            } else {
                alert("Wrong Answer")
            }
        })
    })

    
    
    
    
})
