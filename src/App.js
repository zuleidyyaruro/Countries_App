import Home from './views/Home';
import Hero from './components/Hero';
import Header from './components/Header';
import NotFound from './views/NotFound';
import SingleCountry from './views/SingleCountry';
import SearchCountry from './views/SearchCountry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={SearchCountry} />
        <Route exact path='/country/:name' component={SingleCountry} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;


// Crear un proyecto nuevo de React, con React Router.
// Crear 3 rutas: Vista general de países (lo que ya hicieron de tarea), vista de búsqueda de un país particular (similar al formulario que hicimos hoy) y una vista para ver detalles de un país específico
// Para acceder a los detalles, será mediante un botón "Ver más" disponible en cada item de país (desde la vista general y desde la vista del formulario)
// Mostrar error si alguna búsqueda no es exitosa
// Mostrar un loader cuando las peticiones inicien, quitar loader cuando las peticiones terminen
// Diseño libre.