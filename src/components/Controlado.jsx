import {useState} from "react";


const Controlado = () => {

    // const [title, setTitle] = useState("");
    // const [description , setDescription ] = useState("");
    // const [state, setState] = useState("pendiente");

    const [todo, setTodo]= useState({
        title:'Todo#01',
        description:'Description#01',
        state:'pendiente',
        priority:true
    });

    const {title,description,state,priority} = todo;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title,description,state,priority);
    
    }

    const handleChange = (e) =>{
        const {name,type,checked,value} = e.target;
        setTodo({
            ...todo,[name]:type === "checkbox" ? checked : value
        });


    }


    return(

        <form onSubmit={handleSubmit}>
            <input type="text"  className="form-control mb-2" placeholder="Ingrese Tarea" name="title" value={title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Descripción Tarea" name="description" value={description} onChange={handleChange} ></textarea>
            <div className="form-check mb-2">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={priority} onChange={handleChange} />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange = {handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type="submit" className="btn btn-primary">Guardar Tarea</button>

        </form>

    )
    
};


export default Controlado; 