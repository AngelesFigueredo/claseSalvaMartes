import { useEffect, useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import serviciosDeRestaurantes from './services/tourPedia.service';



function App() {
  const [nombre, cambiarElNombreA] = useState("María")
  const [apellidos, cambiarApellidosA] = useState("García")
  const [datosAPI, cambiarDatos] = useState([])
  const [datosInput, cambiarDatosInput] = useState("")

  useEffect(()=>{

    getData()
  }, [])
  
  const getData = async()=>{
    const APIresponse = await serviciosDeRestaurantes.getRestaurantes()  
    cambiarDatos(APIresponse.data)
    
    console.log(APIresponse.data)
  }



// {  address
//   :
//   "Waltersdorfer Straße 1A, Berlin, Germany"
//   category
//   :
//   "restaurant"
//   details
//   :
//   "http://tour-pedia.org/api/getPlaceDetails?id=101004"
//   id
//   :
//   101004
//   lat
//   :
//   52.405091
//   lng
//   :
//   13.57337
//   location
//   :
//   "Berlin"
//   name
//   :
//   "La Dolce Vita"
// }
  return (
    <div className="App">
      <h1>Hola {nombre} {apellidos}</h1>
      <Boton funcionDeCambio={cambiarApellidosA} correcto="Bellver">
        Este botón te pone el apellido correcto
      </Boton>

      <Boton funcionDeCambio={cambiarElNombreA} correcto="Salvador">
        Este botón te pone el nombre correcto
      </Boton>

      <form >
        <input type="text"  onChange={(evento)=>{ 
          cambiarDatosInput(evento.target.value)
        }} />
        <button type="submit" onClick={(evento)=>{
          evento.preventDefault()
          cambiarElNombreA(datosInput)
        }}>Enviar nombre</button>
      </form>


      {
        datosAPI.map((restaurante)=>{
          return (
            <div>
              <h2>El nombre es: {restaurante.name}</h2>
              <p>La dirección de este local es {restaurante.address}</p>
              
            </div>
          )})
      }

      

    </div>
  );
}



export default App;

