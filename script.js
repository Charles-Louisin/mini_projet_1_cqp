// Gestion des tâches
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Éléments du DOM
const tasksList = document.getElementById('tasksList');
const addTaskBtn = document.getElementById('addTask');
const taskTitleInput = document.getElementById('taskTitle');
const taskPrioritySelect = document.getElementById('taskPriority');
const taskDueDateInput = document.getElementById('taskDueDate');
const searchInput = document.getElementById('searchInput');
const priorityFilter = document.getElementById('priorityFilter');
const statusFilter = document.getElementById('statusFilter');
const dateFilter = document.getElementById('dateFilter');
const toastContainer = document.getElementById('toastContainer');

// Fonction pour afficher les notifications toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Supprimer le toast après 3 secondes
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toastContainer.removeChild(toast), 300);
    }, 3000);
}

// Ajouter une nouvelle tâche
addTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const priority = taskPrioritySelect.value;
    const dueDate = taskDueDateInput.value;

    if (title && dueDate) {
        const task = {
            id: Date.now(),
            title,
            priority,
            dueDate,
            completed: false,
            createdAt: Date.now() // Changé pour utiliser un timestamp pour faciliter le tri
        };

        tasks.push(task);
        saveTasks();
        renderTasks();
        resetForm();
        showToast('Tâche ajoutée avec succès');
    }
});

// Sauvegarder les tâches dans le localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Réinitialiser le formulaire
function resetForm() {
    taskTitleInput.value = '';
    taskPrioritySelect.value = 'high';
    taskDueDateInput.value = '';
}

// Afficher les tâches
function renderTasks() {
    const filteredTasks = filterTasks()
        .sort((a, b) => b.createdAt - a.createdAt);
    tasksList.innerHTML = '';

    if (filteredTasks.length === 0) {
        tasksList.innerHTML = `
            <div class="empty-state">
                <p>Aucune tâche disponible. Veuillez ajouter une tâche</p>
            </div>
        `;
        return;
    }

    filteredTasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = `task-card ${task.completed ? 'completed' : ''}`;
        taskCard.setAttribute('data-task-id', task.id);
        
        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <div class="task-info">
                <p class="priority-${task.priority}">Priorité: ${task.priority}</p>
                <p>Échéance: ${formatDate(task.dueDate)}</p>
            </div>
            <div class="task-actions">
                <div class="task-status">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="toggleTaskStatus(${task.id})">
                    <span>${task.completed ? 'Terminée' : 'En cours'}</span>
                </div>
                <button class="task-delete" onclick="deleteTask(${task.id})">🗑️</button>
            </div>
        `;

        tasksList.appendChild(taskCard);
    });
}

// Filtrer les tâches
function filterTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    const priorityValue = priorityFilter.value;
    const statusValue = statusFilter.value;
    const dateValue = dateFilter.value;

    return tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm);
        const matchesPriority = priorityValue === 'all' || task.priority === priorityValue;
        const matchesStatus = statusValue === 'all' || 
            (statusValue === 'completed' && task.completed) || 
            (statusValue === 'pending' && !task.completed);
        const matchesDate = !dateValue || task.dueDate === dateValue;

        return matchesSearch && matchesPriority && matchesStatus && matchesDate;
    });
}

// Basculer le statut d'une tâche
function toggleTaskStatus(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        showToast(task.completed ? 'Tâche marquée comme terminée' : 'Tâche marquée comme en cours');
    }
}

// Supprimer une tâche
function deleteTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.classList.add('deleting');
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks();
            renderTasks();
            showToast('Tâche supprimée avec succès');
        }, 500);
    }
}

// Formatter la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Écouteurs d'événements pour les filtres
searchInput.addEventListener('input', renderTasks);
priorityFilter.addEventListener('change', renderTasks);
statusFilter.addEventListener('change', renderTasks);
dateFilter.addEventListener('change', renderTasks);

// Afficher les tâches au chargement
renderTasks();