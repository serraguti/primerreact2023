function Saludo(props){
    //PODEMOS DECLARAR VARIABLES DENTRO DE LA FUNCION
    var dato = "Mañana es fiesta y el viernes también";
    //<Saludo nombre='Lucia' edad="19"/>
    const { nombre, edad } = props;
    return (
        <div>
            <h1>Mi primer componente de MIERCOLES!!!</h1>
            <h2>Dato objetivo: {dato}</h2>
            <h1>Otro triste mensaje, {nombre} con edad {edad}</h1>
        </div>
    )
}

export default Saludo;