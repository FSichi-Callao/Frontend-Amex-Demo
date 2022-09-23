import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export const Dashboard = () => {
    return (
        <React.Fragment>
            <section className='start-section'>
                <div className='content-page'>
                    <div>
                        <img src={require("./imgDashboard.png")} alt="Start-Page Img" className='start-img' />
                        <h2 class="text-welcome">
                            <p class="text-welcome1">Bienvenido a la</p>
                            <p class="text-welcome2">Consola de Administración</p>
                        </h2>
                    </div>

                    <div className='actions-section'>
                        <hr class="bottom-dotted line-custom" />
                        <p className='actions-tittle'>Selecciona la acción que deseas realizar:</p>
                        <div className='buttons-section row'>

                            <div className='d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center col-12 col-md-12 col-lg-6 col-sm-12 col-xs-12 button-container '>
                                <Link to={'../admin-profiles'} className='btn btn-lg button-style'>
                                    Gestión de Perfiles
                                </Link>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center col-12 col-md-12 col-lg-6 col-sm-12 col-xs-12 mt-0 mt-sm-3 mt-lg-0 button-container'>
                                <Link to={'../admin-users'} className='btn btn-lg button-style'>
                                    Gestión de Usuarios
                                </Link>
                            </div>

                        </div>
                    </div>

                    <hr class="bottom-dotted" />

                </div>
            </section>
        </React.Fragment>
    )
}