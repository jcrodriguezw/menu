import React from 'react'

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <h1> ReCoTuTo </h1>
                <div>
                    <ul>
                        <li> <a href="#"> Posts </a> </li>
                        <li> <a href="#"> Shouts </a> </li>
                        <li> <a href="#"> Comunidades </a> </li>
                        <li> <a href="#"> Juegos </a> </li>
                        <li> <a href="#"> Tops </a> </li>
                    </ul>
                </div>
                <div>
                    <button> search </button>
                    <button> Facebook </button>
                    <button> Ingresar </button>
                    <button> Registrate </button>
                </div>
            </div>
        )
    }
}

export default NavBar;