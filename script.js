window.onload = function() {
    alert("Bine ai venit pe portofoliul meu! Explorează pentru a afla mai multe despre mine.");
    
    // Poți adăuga mai multe animații sau efecte JavaScript
}

function addTaskToList(taskText) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Buton pentru a marca task-ul ca finalizat
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Finalizează";
    completeBtn.onclick = function() {
        taskItem.style.textDecoration = 'line-through'; // Marchează ca finalizat
    };

    // Buton de ștergere
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Șterge";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskItem.remove();
        saveTasks(); // Salvează lista după ștergere
    };

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
