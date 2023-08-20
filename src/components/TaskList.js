import '../App.css';
import { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
export default function TaskList({ tasks, setTasks }) {
    const [editingTaskId, setEditingTaskId] = useState(null);

    const deleteItem = (id) => {
        setTasks(tasks.filter(obj => obj.id !== id));
    }

    return (
        <div className="task-list">
            {tasks.map((el) => (
                <div className={`task-item ${editingTaskId === el.id ? 'editing' : ''}`} key={el.id}>
                    {editingTaskId === el.id ? (
                        <div className="task-item">
                            <input
                                className="inpp"
                                type="text"
                                value={el.value}
                                onChange={(e) =>
                                    setTasks(tasks.map(task =>
                                        task.id === el.id
                                            ? { ...task, value: e.target.value }
                                            : task
                                    ))
                                }
                            />
                            <button
                                className="btn"
                                onClick={() => setEditingTaskId(null)}>
                                Сохранить
                            </button>
                        </div>
                    ) : (
                        <div className="git">
                            <p className="pp">{el.value}</p>
                            <div className="spanDiv">
                                <span className="ppp" onClick={() => deleteItem(el.id)}><FaTrash /></span>
                                <span className="ppp" onClick={() => setEditingTaskId(el.id)}><BiEdit /></span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
