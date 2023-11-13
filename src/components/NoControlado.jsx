const NoControlado = () =>{

return(
    <form>
        <input type="text" placeholder="Ingrese ToDo" className = "form-control mb-2" name="title"
        
        />

        <textarea className="form-control mb-2" placeholder="Limpiar caja michis 😹" name="descipcion"/>
        <select className="form-select mb-2" >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>

        <button type="submit" className="form-control btn btn-primary">Guardar Tarea</button>


    </form>
     
);

};

export default NoControlado;