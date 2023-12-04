import {useState} from "react";


const Controlado = () => {

    // const [title, setTitle] = useState("");
    // const [description , setDescription ] = useState("");
    // const [state, setState] = useState("pendiente");

    const [todo, setTodo]= useState({
        title:'Todo#01',
        description:'Description#01',
        state:'pendiente'
    });


    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(todo.title, todo.description,todo.state);

    
    }


    return(

        <form onSubmit={handleSubmit}>
            <input type="text"  className="form-control mb-2" placeholder="Ingrese Tarea" name="title" value={todo.title} onChange={(e)=>setTodo({...todo,title:e.target.value})}/>
            <textarea className="form-control mb-2" placeholder="Descripción Tarea" name="description" value={todo.description} onChange={(e)=>setTodo({...todo,description:e.target.value})} ></textarea>
            <select className="form-select mb-2" name="state" value={todo.state} onChange = {(e)=>setTodo({...todo, state:e.target.value})}>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type="submit" className="btn btn-primary">Guardar Tarea</button>

        </form>

    )
    
};


export default Controlado; 