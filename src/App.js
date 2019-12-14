import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Contacto from './Contacto/Contacto'
import Productos from './Productos/Productos'
import Servicios from './Servicios/Servicios'
import PageError from './PageError/PageError'


export default function App() {
    return (
    <BrowserRouter>
        <div className= "App">
            <NavBar/>

            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos" exact render={() => <Productos titulo = "Tienda"/>} />
            <Route path="/servicios" exact component={Servicios} />
            <Route path="/contacto" exact component={Contacto} />
            <Route component={PageError} />
            </Switch>
            <Footer/>
           
        </div>
    </BrowserRouter>
    )
}
