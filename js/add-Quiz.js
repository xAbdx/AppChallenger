let quizes = [];

const addQuiz = () => {
    let quiz = {
        title: document.getElementById('title').value,
        topic: document.getElementById('topic').value,
        numberQuestion: document.getElementById('number_Of_Questions').value
    }
    //to add the quiz object to quizes array
    quizes.push(quiz);

    //alert the user that the quiz has been added
    alert('The quiz has been added'); 

    //saving to localStorage
    localStorage.setItem('quizesList', JSON.stringify(quizes));
};

document.getElementById('btn').addEventListener('click', addQuiz);