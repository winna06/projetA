const questions = [
    {
        question: "1+1=?",
        a:"2",
        b:"4",
        c:"5",
        d:"3",
        e:"0",
        correct:"a",
    },
    {
        question: "combien font 2*4",
        a:"2",
        b:"0",
        c:"4",
        d:"88",
        e:"8",
        correct:"e",
    },
    {
        question: "2+1=?",
        a:"2",
        b:"4",
        c:"5",
        d:"3",
        e:"0",
        correct:"d",
    },
    {
        question: "4+1=?",
        a:"2",
        b:"4",
        c:"5",
        d:"3",
        e:"0",
        correct:"c",
    },
];

const lesQuestions= document.getElementById("question");
const quiz =document.getElementById("quiz");
const reponse =document.querySelectorAll(".answer");
const reponse_a= document.getElementById("a-rep");
const reponse_b= document.getElementById("b-rep");
const reponse_c= document.getElementById("c-rep");
const reponse_d= document.getElementById("d-rep");
const reponse_e= document.getElementById("e-rep");

const btn_suivant= document.getElementById("btn-click");


    let point =0
    let quizz= 0

    commencement();

    function commencement(){

        deselect()

        const Dataquestion= questions[quizz]
         lesQuestions.innerText= Dataquestion.question
         reponse_a.innerText = Dataquestion.a
         reponse_b.innerText =Dataquestion.b
         reponse_c.innerText = Dataquestion.c
         reponse_d.innerText =Dataquestion.d
         reponse_e.innerText =Dataquestion.e 
    }

    function deselect(){
        reponse.forEach(repo => repo.checked = false)
    }

    // reponse==answerEls
    // repo == answerEl
    // rep == answer

    function select_Eleme(){

        let  answer
        reponse.forEach(repo =>{
            if(repo.checked){
                answer=repo.id
            }
        })
        return answer
    }


    btn_suivant.addEventListener('click',()=>{

       

        const answer =select_Eleme()

        // console.log(answer)
        // const tab = questions.toString()

        if (answer){

            if(answer === questions[quizz].correct){

                point++
    
            }
            quizz++
            if(quizz < questions.length){
                commencement();
                
            }else{
                // console.log(point)
               quiz.innerHTML = '<h2> vous avez repondu avec ' +point+ ' vrai sur ' +questions.length+' poseez'
            }
        }
            
      
           
    })