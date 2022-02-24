const questions = document.querySelectorAll(".question-div")

questions.forEach(question =>{
    question.addEventListener("click", function(e){
        if(question.parentNode.classList.contains("qNa"))
        
        question.parentNode.classList.toggle("active")
    })
})


document.querySelectorAll(".question").forEach(item =>{
    item.addEventListener("mouseover",function(){
       const orangeBox = document.getElementById("orange-box");
       orangeBox.classList.toggle("active")  
    })
})