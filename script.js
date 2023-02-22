let currentQuestion = 0;

let corretAnswer = 0

//BOTÃO RESET


document.querySelector('.scoreArea button').addEventListener('click', resetEvent)




showQuestion();

function showQuestion(){
if(questions[currentQuestion]){
    let q= questions[currentQuestion];

    //Barrinha de perguntas ( verde)
    let greenbar = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector('.progress--bar').style.width = `${greenbar}%`;


    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    document.querySelector('.question').innerHTML = q.question; // Saida das questoes no quiz 
    document.querySelector('.options').innerHTML = '';


  for(let i in q.options){
    document.querySelector('.options').innerHTML += 
    `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>` //questoes e pergundas (saída)
      }

      document.querySelectorAll('.options .option').forEach(item =>{  
item.addEventListener('click', optionClick);
       })

} else {

    finishQuiz();

}



}



function optionClick(e){

let eventClickOption = parseInt(e.target.getAttribute('data-op'));

if(questions[currentQuestion].answer === eventClickOption){
        corretAnswer++;
}

currentQuestion++;//Acertando a questão segue para as proximas perguntas
showQuestion();

}



function finishQuiz(){
let points = Math.floor((corretAnswer / questions.length) * 100);

if(points < 30){
    document.querySelector('.scoreText1').innerHTML=`Tá Ruim em?!!!`
    document.querySelector('.scorePct').style.color=`#FF0000`;
}else if(points >= 30 && points < 70){
    document.querySelector('.scoreText1').innerHTML=`Muito bom`
    document.querySelector('.scorePct').style.color=`#FFFF00`;
}else if(points >=70){
    document.querySelector('.scoreText1').innerHTML=`Parabéns`
    document.querySelector('.scorePct').style.color=`#0D630D`;
}




document.querySelector('.scorePct').innerHTML=`Acertou ${points}%`
document.querySelector('.scoreText2').innerHTML=` Você respondeu ${questions.length} questões e acertou ${corretAnswer}.`

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = ' 100% ';

    
}



function resetEvent(){
    corretAnswer = 0;
    currentQuestion = 0;
    showQuestion();
}