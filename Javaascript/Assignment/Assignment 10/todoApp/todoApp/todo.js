function TodoApp() {
  const [todo, settodo] = React.useState([{
    text: "Prayer",
    completed: false,
  },
  {
    text: "Breakfast",
    completed: true,
  },
  {
    text: "do something new",
    completed: true,
  },
  {
    text: "Next to do ",
    completed: false,
  },])

  const changeBool=(boo,index)=>{

    const todoCopy = [...todo]
    
    todoCopy[index].completed=boo;
    settodo([
      ...todoCopy
    ])
  }

  const deleterow = (index)=>{
    const todoCopy = [...todo]
    todoCopy.splice(index,1)
    
  
    settodo([
      ...todoCopy
    ])
  }


  const updateState=(newVal)=>{


console.log(newVal,"newVal");

    const todoCopy = [...todo]
    todoCopy.push({text:newVal,completed:false});

    settodo(
   [ ...todoCopy,
    ]
    )
    console.log('todo Array',todo)

    
  }
  return (

    
    <div className="col-12 col-lg">
      <br></br>
      <br></br>
      <h3 className="col-10" style={{ textAlign: "center" }}>
        <b>Todo List</b>
      </h3>

      <AddTodo updateState={updateState} />
      <br></br>
      <TodoList todo={todo}  changeBool={changeBool}  deleterow={deleterow}/>
    </div>
  );
}

function AddTodo(props) {
  let newVal
  return (
    <div>
      <p style={{ float: "left" }}>
        <b>Add to to</b>
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control col-12 "
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="todoInp"
        onChange={(event)=>{newVal= event.target.value}} />

        
      </div>
      <button  onClick={()=>{props.updateState(newVal)}}className="btn btn-primary" type="submit" id="btn"  >
        submit
      </button>
    </div>
  );
}

function TodoList(props) {


// const btn = document.getElementById("btn");
//       console.log(btn, "button");
//       btn.addEventListener("click", () => {
//         let newTodo = document.getElementById("todoInp").value;
//         todos.push({ text: newTodo, completed: false });
//         //after updating the text to todo input = null
//         document.getElementById("todoInp").value = "";
//       });
console.log("props.todo",props.todo);
// console.log("props.ChangeBool",props.changeBool);
  
  return (
    <div>
      {props.todo.map((val,index) => {
        let indx = index
        return <Todo   indx ={indx} key={index} val={val}  deleterow={props.deleterow} changeBool={props.changeBool} />;
      })}
    </div>
  );
}
function Todo(props) {
  console.log('props',props);
 

  
  console.log('index',props.indx);

  return (
    return (
    <ul
      className={
        props.val.completed
          ? "list-group  completed "
          : "list-group  notCompleted"
      }
    >
      <li className="list-group-item" key={props.indx}>
        {props.val.text}
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          style={{ float: "right", marginLeft: "5px" }}
          onClick={()=>{props.deleterow(props.indx)}}
        >
          &#10005;
        </button>
        <button
          
          type="button"
          className="btn btn-outline-success btn-sm pl-1 ml-1"
          style={{ float: "right" }}
          onClick={()=>{props.changeBool(true,props.indx)}}

        >
          &#10003;
        </button>
      </li>
    </ul>
  );
}
ReactDOM.render(<TodoApp />, document.getElementById("container"));
