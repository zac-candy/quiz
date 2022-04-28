$(function(){
    let questionId = 0
    let data = []


    setQuestion = function(id) {
        q = data[id]
        $("#question").html(q["que"])
        $("#op1").html(q["ans"][0])
        $("#op2").html(q["ans"][1])
        $("#op3").html(q["ans"][2])
        $("#op4").html(q["ans"][3])
    }
    $.get("/question", function(d){
        for(let i = 0; i < d.length; i++) {
            data.push(d[i])
        }
        setQuestion(questionId);
    })

   
    $("#nx").on("click", function() {
        questionId+=1;
        if(questionId>=data.length) {
            questionId.length -1
        }
        setQuestion(questionId)
    })

    $("#prev").on("click", function() {
        questionId-=1
        if(questionId <=0) {
            questionId.length+1
        }
        setQuestion(questionId)
    })

    $("#op1").on("click", function() {
        if(data[questionId]["key"]=="1") {
            alert("Correct Answer")
        } else {
            alert("Wrong Answer")
        }
    }) 

    $("#op2").on("click", function() {
        if(data[questionId]["key"]=="2") {
            alert("Correct Answer")
        } else {
            alert("Wrong Answer")
        }
    }) 

    $("#op3").on("click", function() {
        if(data[questionId]["key"]=="3") {
            alert("Correct Answer")
        } else {
            alert("Wrong Answer")
        }
    }) 

    $("#op4").on("click", function() {
        if(data[questionId]["key"]=="4") {
            alert("Correct Answer")
        } else {
            alert("Wrong Answer")
        }
    }) 

    $("#op1").on("click", function() {
        if(data[questionId]["key"]=="1") {
            alert("Correct Answer")
        } else {
            alert("Wrong Answer")
        }
    }) 

});