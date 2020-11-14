let questions = [];

const addQuestion = () => {
    let question = {
        q: document.getElementById('question').value,
        topic: document.getElementById('topic').value,
        options: document.getElementById('options').value
    }
    //to add the quiz object to quizes array
    questions.push(question);

    //alert the user that the question has been added
    alert('The question has been added'); 

    //saving to localStorage
    localStorage.setItem('questionsList', JSON.stringify(questions));
};

document.getElementById('btn').addEventListener('click', addQuestion);

function addOption(){
    let toAddOption = document.createElement('INPUT');
    toAddOption.setAttribute('type', 'text');
    toAddOption.setAttribute('value', '. . .')
    toAddOption.className = 'input_container_inactive';

    let addPlus = document.createElement('I');
    addPlus.className = 'fas fa-plus-circle';

    let addMinus = document.createElement('I');
    addMinus.className = 'fas fa-minus-circle';

    let addCheck = document.createElement('I');
    addCheck.className = 'fas fa-check-circle';

    document.getElementById('input_container').append(toAddOption);
    document.getElementById('input_container').append(addPlus);
    document.getElementById('input_container').append(addMinus);
    document.getElementById('input_container').append(addCheck);
}

function removeOption(){
    let toRemoveOpion = document.getElementById('input_container_inactive');
    toRemoveOpion.remove();
}

// I think that the icon color should change!!  and the icon color should be black by default
// function trueOption(){
//     let trueOp = document.getElementById('option');
//     trueOp.classList.add('true-Input');
// }

