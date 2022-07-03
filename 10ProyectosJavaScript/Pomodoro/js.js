const tasks = [];
let time=0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(itTask != ""){
        createTask(itTask.value);
        itTask.value='';
        renderTask();
    }
});


function createTask(value){
    const newTask = {
        id: (Math.random()*100).toString(36).slice(3),
        title: value,
        completed: false
    };
    task.unshift(newTask);
}

function renderTask(){
    const html = task.map(task =>{
            return `
            <div class="completed">${task.completed ? `<span>Done</span>` : `<button class="start-button" data-id="${task.id}">Start </button>`}</div>
            <div class="title">${task.title}</div>
            `;  
    });

    const taskContainer = document.querySelector("#tasks")
    taskContainer.innerHTML = html.join("");
    const startButtons = document.querySelectorAll(".task .start-button");

    startButtons.forEach(button => {
        button.addEventListener('click', e => {
            if(!timer){
                const id = button.getAttribute('data-id')
                startButtonHandler(id);
                button.textContent = 'In progress ...';
            };
        });
    });
}

function startButtonHandler(id){
    time = 25 * 60;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id === id);
    const taskName = document.querySelector("#time #taskName");
    taskName.textContent = tasks[taskIndex].title;

    timer = setInterval(()=>{
        timeHandler(id);
    }, 1000);
}