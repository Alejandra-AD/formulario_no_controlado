const NoControlado = () =>{

return(
    <form>
        <input type="text" placeholder="Ingrese ToDo" className = "form-control mb-2" 
        
        />

        <textarea className="form-control mb-2" placeholder="Limpiar caja michis 😹"/>
        <select className="form-select mb-2" >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>

        <button type="submit" className="form-control bg-primary">Guardar Tarea</button>


    </form>
     
);

};

export default NoControlado;