import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  //write your code here
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  function handleEdit() {
    setIsEditing(true);
  }
  function handleCancel() {
    setIsEditing(false);
    setNewText(task.text);
  }
  function handleSave() {
    onChange({ ...task, text: newText, completed: isCompleted });
    setIsEditing(false);
  }
  function handleDelete() {
    onDelete(task.id);
  }
  function handleChange(e) {
    setNewText(e.target.value);
  }
  function handleCheckboxChange() {
    setIsCompleted(!isCompleted);
  }
  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={handleChange} />
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
