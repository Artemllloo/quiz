let quation_field = document.querySelector('.question')
let answer_button = document.querySelectorAll('.answer')
let container_h3 = document.querySelector('.container_h3')
let container_main = document.querySelector('.main')
let container_start = document.querySelector('.start')
let start_btn = document.querySelector('.start-btn')

function randit(min, max){
    return Math.round(Math.random()*(max -min)+min)
}

let signs = ['+', '-', '*', '/']
function getRandomSign(){
    return signs[randit(0,3)]
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]] 
  } 
}
my_array = [1, 2, 3, 4, 5] 
shuffle(my_array)



class Question {
constructor(){
    let a = randit(1, 100)
    let b = randit(1, 100)
    let sign = getRandomSign()
this.question=`${a} ${sign} ${b}`
if(sign=='+'){ this.correct = a + b}
else if (sign=='-'){ this.correct = a - b}
else if (sign=='*'){ this.correct = a * b}
else if (sign=='/'){ this.correct = Math.round((a / b)*100)/100}

this.answers = [ 
    randit(this.correct-25, this.correct+11),
    randit(this.correct-35, this.correct+12),
    this.correct,
    randit(this.correct-5, this.correct+1),
    randit(this.correct-29, this.correct+51)
]

shuffle(this.answers)




}

display(){
    quation_field.innerHTML=this.question
    for(let i=0; i<this.answers.length; i+=1){
        answer_button[i].innerHTML = this.answers[i]
    }
}


}
let current_question = new Question()
let total_answer_given = 0
let correct_answer_given = 0

start_btn.addEventListener('click', function(){
    container_main.style.display='flex'
    container_start.style.display='none'
    

current_question.display()

setTimeout(function(){
        container_main.style.display='none'
    container_start.style.display='flex'
    container_h3.innerHTML=`Ви дали ${correct_answer_given} правильних відповідей із ${total_answer_given}
Точність -${Math.round(correct_answer_given*100/total_answer_given)} %`
}, 10000)
})




for(let i=0; i<answer_button.length; i+=1){
    answer_button[i].addEventListener('click', function(){
        if(answer_button[i]. innerHTML == current_question.correct){
            correct_answer_given+=1
            answer_button[i].style.background = '#00ff00'
            anime({
                targets: answer_button[i],
                background: '#000000',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
        else{
            answer_button[i].style.background = '#FF0000'
            anime({
                targets: answer_button[i],
                background: '#000000',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
        total_answer_given+=1
        current_question = new Question()
        current_question.display()
    })
}

