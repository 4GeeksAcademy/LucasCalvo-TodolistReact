import React,{useState} from "react";


const Home = () => {
	let [tarea, setTarea]=useState("")
	let [lista, setLista]=useState([])
    const escribirTarea = (event) =>{
		setTarea (event.target.value)
    }
	const agregar = (event) =>{
		if (event.key==="Enter") {
		setLista ([...lista, tarea])
		setTarea ("")
	}
}
const eliminarTarea = (posicion) =>{
	setLista (lista.filter ((item, index)=>index!==posicion))
}

	return (
	<div className="d-flex flex-column">	
	    <h1 className="text-secondary text-center">TodoList</h1>
		<input className="form-control p-4" type="text"  placeholder="agrega una tarea" onChange={escribirTarea} value={tarea} onKeyDown={agregar}/>
        <ul className="list-unstyled text-start list-group">
			{lista.map((item,index)=>(<li className="list-group-item" key={index}>
			{item}<button onClick={()=>eliminarTarea(index)}>❌</button></li>))}
		</ul>
			<div className="paper" >Tienes {lista.length} {lista.length === 1 ? "tarea" : "tareas"}</div>
		
  </div>
  
			
	);
};

export default Home;

