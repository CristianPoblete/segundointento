import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { UsuarioContext } from "../contexts/UsuarioContext"
import { logout } from "../api/authServices"

const Menu = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)

    const handleSalir = () => {
        const getSalir = async () => {
            try {
                await logout()
                localStorage.removeItem('usuario')
                setUsuario(null)
            } catch (error) {
                console.error(error)
            }
        }
        getSalir()
    }

    if (!usuario) {
        return <></>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PelisPelis</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <Link className="nav-link"  to="/agregar-pelicula">Agregar Película</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" type="button" onClick={handleSalir}>LogOut</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Menu