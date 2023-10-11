function Metodos() {
    //LOS METODOS, AL IGUAL QUE LAS VARIABLES
    //SE DECLARAN FUERA DE return
    const mostrarMensaje = () => {
        console.log("Botón pulsado...");
    }
    return (<div>
        {mostrarMensaje()}

        <h1>Ejemplo métodos React</h1>
        <button onClick={ () => mostrarMensaje() }>
            Mostrar mensaje
        </button>
    </div>)
}

export default Metodos;