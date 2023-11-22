import { useRef,useState } from "react";

const NoControlado = () => {

    const form = useRef(null);
    const[error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // capturar los datos
        const formData = new FormData(form.current);
        // const formObject = Object.fromEntries([...formData.entries()]);
        const { title, descripcion, state } = Object.fromEntries([...formData.entries()]);

        console.log("Submit");
        console.log(form.current);
        console.log([...formData.entries()]);
        console.log(title, descripcion, state);

        //validar los datos
        if (!title.trim() || !descripcion.trim()) {
            return setError("Llena todos los campos");
        };

        //enviar los datos

};

        return (
            <form onSubmit={handleSubmit} ref={form}>
                <input type="text" placeholder="Ingrese ToDo" className="form-control mb-2" name="title" />   {/* name para usar el form data */}
                <textarea className="form-control mb-2" placeholder="Limpiar caja michis 😹" name="descripcion" />

                <select className="form-select mb-2" name="state">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                

                <button type="submit" className="btn btn-primary mx-2">Guardar Tarea</button>
                
                {
                    error !=='' && error //
                }


            </form>

        );

    };

    export default NoControlado;