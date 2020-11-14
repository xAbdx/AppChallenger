let titles = [];

const addTitle = () => {
    let title = {
        t: document.getElementById('title').value
    }
    //to add the title object to titles array
    titles.push(title);

    //alert the user that the title has been added
    alert('The title has been added'); 

    //saving to localStorage
    localStorage.setItem('titlesList', JSON.stringify(titles));
};

document.getElementById('btn').addEventListener('click', addTitle);