import { useState } from "react";
import "./App.css";

function App() {
  const [text, settext] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const addTodo = () => {
    const temp = [...todo];
    temp.push(text);
    setTodo(temp);
    settext("");
  };

  const delTodo = (ind) => {
    const temp = [...todo];
    temp.splice(ind, 1);
    setTodo(temp);
    settext("");
  };

  const editTodo = (index) => {
    settext(todo[index]);
    setEdit(true);
    setEditIndex(index);
  };

  const updateTodo = () => {
    const temp = [...todo];
    temp[editIndex] = text;
    setTodo(temp);
    setEdit(false);
    settext("");
  };

  const clearTodo = () => {
    setTodo([]);
  };

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <hr />
      <label htmlFor="text">Enter Todo: </label>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      {edit ? (
        <button onClick={() => updateTodo()}>Update </button>
      ) : (
        <>
          <button onClick={() => addTodo()}>Add </button>
          <button onClick={() => clearTodo()}>Clear All </button>
        </>
      )}

      <br />
      <br />
      <center>
        <table style={{ textAlign: "center" }}>
          <tr>
            <th>Index</th>
            <th>Todo</th>

            <th>Actions</th>
          </tr>
          {todo.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item} </td>

              <td>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => delTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
}

export default App;
