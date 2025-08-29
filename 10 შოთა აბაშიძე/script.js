(function () {
  const STORAGE_KEY = "todos.v1";

  /** @typedef {{ id: string; title: string; completed: boolean }} Todo */

  /** @type {Todo[]} */
  let todos = [];
  /** @type {'all' | 'active' | 'completed'} */
  let currentFilter = "all";

  const form = document.getElementById("new-todo-form");
  const input = document.getElementById("todo-input");
  const listEl = document.getElementById("todo-list");
  const itemsLeftEl = document.getElementById("items-left");
  const clearCompletedBtn = document.getElementById("clear-completed");
  const filterButtons = Array.from(document.querySelectorAll(".filter"));

  function generateId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ todos }));
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data.todos) ? data.todos : [];
    } catch {
      return [];
    }
  }

  function setFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
    render();
  }

  function getFilteredTodos() {
    if (currentFilter === "active") return todos.filter((t) => !t.completed);
    if (currentFilter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }

  function updateCounts() {
    const left = todos.filter((t) => !t.completed).length;
    const label = `${left} ${left === 1 ? "item" : "items"} left`;
    itemsLeftEl.textContent = label;
  }

  function createTodoItem(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-toggle";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", "Toggle todo");
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const title = document.createElement("div");
    title.className = "todo-title" + (todo.completed ? " completed" : "");
    title.textContent = todo.title;

    const del = document.createElement("button");
    del.className = "icon-btn";
    del.setAttribute("aria-label", "Delete todo");
    del.textContent = "✕";
    del.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(checkbox);
    li.appendChild(title);
    li.appendChild(del);
    return li;
  }

  function render() {
    const fragment = document.createDocumentFragment();
    const visibleTodos = getFilteredTodos();
    visibleTodos.forEach((t) => fragment.appendChild(createTodoItem(t)));
    listEl.innerHTML = "";
    listEl.appendChild(fragment);
    updateCounts();
  }

  function addTodo(title) {
    const trimmed = title.trim();
    if (!trimmed) return;
    todos.unshift({ id: generateId(), title: trimmed, completed: false });
    save();
    render();
  }

  function toggleTodo(id) {
    const idx = todos.findIndex((t) => t.id === id);
    if (idx !== -1) {
      todos[idx].completed = !todos[idx].completed;
      save();
      render();
    }
  }

  function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    save();
    render();
  }

  function clearCompleted() {
    const hadCompleted = todos.some((t) => t.completed);
    if (!hadCompleted) return;
    todos = todos.filter((t) => !t.completed);
    save();
    render();
  }

  // Event wiring
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(input.value);
    input.value = "";
    input.focus();
  });

  filterButtons.forEach((btn) =>
    btn.addEventListener("click", () => setFilter(btn.dataset.filter))
  );

  clearCompletedBtn.addEventListener("click", clearCompleted);

  // Hydrate
  todos = load();
  render();
})();
