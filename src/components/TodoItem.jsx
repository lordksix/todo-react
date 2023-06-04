import { useState, useRef } from 'react';
import styles from '@/styles/TodoItem.module.scss';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);
  /* const [updateInput, setUpdateInput] = useState(itemProp.title); */

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      /* setUpdate(updateInput, itemProp.id); */
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {/* {updateInput} */}
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        /* value={updateInput} */
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        /* onChange={(e) => setUpdateInput(e.target.value)} */
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;