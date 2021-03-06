import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/images/logo.svg';
import './EstilosdeSidebar.css'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            
            <ul className="glow-on-hover navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
    
                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/">
                    <div className="logo zoom ">
                        <img  src={image} alt="quiero mi compu"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link zoom" to="/">
                        <span>Quiero Mi Compu</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">menu</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Home</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/product">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Todos los Productos</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/user">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Todos los usuarios</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Total Categorias</span>
                    </Link>
                </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/totals">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Total de usuarios y productos</span>        
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lastProduct">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Ultimo Producto y Ultimo Usuario Creado</span>
                    </Link>
                </li>
                
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;