

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
                $("#op1").replaceWith("<button type=\"button\" class=\"btn btn-success btn-block\" id = \"op1\">Charles Babbage </button> <br/>")
            } else {
                $("#op1").replaceWith("<button type=\"button\" class=\"btn btn-danger btn-block\" id = \"op1\">Charles Babbage </button> <br/>")
            }
        })
    })

    $("#op2").on("click",function() {
        $.get("/answer/2", function(data) {
            if(data["answer"]) {
                $("#op2").replaceWith("<button type=\"button\" class=\"btn btn-success btn-block\" id = \"op2\">Chandan </button> <br/>")
            } else {
                $("#op2").replaceWith("<button type=\"button\" class=\"btn btn-dangers btn-block\" id = \"op2\">Chandan </button> <br/>")
            }
        })
    })

    $("#op3").on("click",function() {
        $.get("/answer/3", function(data) {
            if(data["answer"]) {
                $("#op3").replaceWith("<button type=\"button\" class=\"btn btn-success btn-block\" id = \"op3\">Prasthuth </button> <br/>")
            } else {
                $("#op3").replaceWith("<button type=\"button\" class=\"btn btn-danger btn-block\" id = \"op3\">Prasthuth </button> <br/>")
            }
        })
    })

    $("#op4").on("click",function() {
        $.get("/answer/4", function(data) {
            if(data["answer"]) {
                $("#op4").replaceWith("<button type=\"button\" class=\"btn btn-success btn-block\" id = \"op4\">Tejas </button> <br/>")
            } else {
                $("#op4").replaceWith("<button type=\"button\" class=\"btn btn-danger btn-block\" id = \"op4\">Tejas</button> <br/>")
            }
        })
    })

    
    
    
    
})
