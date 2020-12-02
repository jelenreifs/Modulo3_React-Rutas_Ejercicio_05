import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function Jugador(props) { 
  return (
    <div>
      <h4>{props.nombre}</h4>
      <p>{props.estatura}</p>
      <p>{props.puntos}</p>
     </div>
  )
}


function App() {
  const[equipo, setEquipo] = useState([
    {
      "id": 1,
      "nombre": "LeBron James",
      "estatura": "2,06 m",
      "puntos": "979", 
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a7/LeBron_James_Lakers.jpg"
  },
      {
      "id": 2,
      "nombre": "Michael Jordan",
      "estatura": "1,98 m",
      "puntos": "1560", 
      "imagen": "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ECSZYFSIZNGRFJLVCNRBYW2JLA.jpg"
  },
          {
      "id": 3,
      "nombre": "Willy Hernangómez",
      "estatura": "2,11 m",
      "puntos": "458", 
      "imagen": "https://static.hoy.es/www/multimedia/201906/21/media/cortadas/139143445--624x880.jpg"
    }
  ]
  )

  const jugadores = equipo.map(jugador => { 
    return (
      <div>
         <Link to = {"/" + jugador.nombre}>
          <h4>{jugador.nombre}</h4>
          </Link>
        <img src={jugador.imagen} alt="" width="200" />
        </div>
    )
  })
  

  return (
    <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>                            
          </ul>
        </header> 
      
      <Route exact path="/">
        {jugadores}
      </Route>

      <Route exact path="/LeBron James">
        <Jugador
          nombre={equipo[0].nombre}
          estatura={equipo[0].estatura}
          puntos={equipo[0].puntos}
        />
      </Route>
      <Route exact path="/Michael Jordan">
        <Jugador
          nombre={equipo[1].nombre}
          estatura={equipo[1].estatura}
          puntos={equipo[1].puntos}
        />
      </Route>
      <Route exact path="/Willy Hernangómez">
        <Jugador
          nombre={equipo[2].nombre}
          estatura={equipo[2].estatura}
          puntos={equipo[2].puntos}
        />
      </Route>
    </BrowserRouter>
    )
  
}

export default App;
