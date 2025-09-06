export function saveTasks(array) {
  localStorage.setItem("tasks", JSON.stringify(array));
}

export function loadTasks() {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}