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

    const [error, setError]= useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title,description,state,priority);

        // vaidando los datos
        if (!title.trim() || !description.trim()) {

            console.log("llene todos los campos");
            setError(true);
            return;
    
        }else{
            setError(false);
    
        }
       
        //se envian los datos en un array
    
    }

    

    const handleChange = (e) =>{
        const {name,type,checked,value} = e.target;
        setTodo({
            ...todo,[name]:type === "checkbox" ? checked : value
        });


    }


    return(
        <div>{error && <div className="alert alert-danger">Todos los campos son obligatorios</div>}
        {/* si el error se cumple entonces se muestra la alert */}
       
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
        </div>

    )
    
};


export default Controlado; 