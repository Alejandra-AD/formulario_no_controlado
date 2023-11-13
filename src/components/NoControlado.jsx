const NoControlado = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese ToDo" className="form-control mb-2" name="title" />   {/* name para usar el form data */}
            <textarea className="form-control mb-2" placeholder="Limpiar caja michis 😹" name="descipcion" />

            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <button type="submit" className="btn btn-primary ">Guardar Tarea</button>


        </form>

    );

};

export default NoControlado;