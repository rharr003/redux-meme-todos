import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function ToDoForm() {
  const [formData, setFormData] = useState({
    task: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: { ...formData, id: uuid(), isCompleted: false },
    });
    setFormData({ task: "", priority: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <label htmlFor="priority">Priority:</label>
      <input
        id="priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      />
      <button>Add a new todo!</button>
    </form>
  );
}

export default ToDoForm;
