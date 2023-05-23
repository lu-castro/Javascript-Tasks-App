document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    
    const task = {
        title,  //task : task
        description //description : description
    };

    // para guardar los datos del formulario 
    // localStorage.setItem('tasks', JSON.stringify(task)) //necesita dos parámetros ('nombreDelDato', valorDelDato). 
        //JSON.stringfy es un método que convierte un objeto en un string.
        // Se puede ver en la sección Local Storage de Application en la consola. 

   // localStorage.getItem('tasks') //No necesita parámetro porque estamos obteniendo los datos, no nombrándolos. Hay que darle el nombre de los datos que se quieren obtener

   if (localStorage.getItem('tasks') === null) {
       let tasks = [];
       task.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
   } else { 
       let tasks = JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   getTask();
    e.preventDefault();
}

function saveTask(e) {

    function getTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        let tasksView = document.getElementById('tasks');

        tasksView.innerHTML = '';

        for(let i = 0; i < tasks.length; i++) {
            let title = tasks[i].title;
            let description = tasks[i].title;
            tasksView.innerHTML = `<div class="card">
                <div class="card-body">
                    <p>${'title'} - ${'description'}</p>
                    <a class="btn btn-danger" onclick="deleteTask('${title}')"></a>
                </div>
            </div>`
        }
    }

}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('taks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
}

getTask();
